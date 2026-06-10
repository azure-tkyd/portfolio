import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import { posts } from './db/schema/posts'

type Env = {
  DB: D1Database
  // CORS 許可 origin（カンマ区切り）。本番は GitHub Variables→wrangler --var、ローカルは .dev.vars で注入
  ALLOWED_ORIGINS?: string
}

const app = new Hono<{ Bindings: Env }>()

// 許可 origin は環境変数 ALLOWED_ORIGINS（カンマ区切り）で外部から注入する
app.use('*', cors({
  origin: (origin, c) => {
    const allowed = ((c.env as Env).ALLOWED_ORIGINS ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    return allowed.includes(origin) ? origin : undefined
  },
}))

// 一覧: content を除外して返す
app.get('/posts', async (c) => {
  const db = drizzle(c.env.DB)
  const rows = await db
    .select({
      id:         posts.id,
      slug:       posts.slug,
      title:      posts.title,
      date:       posts.date,
      categories: posts.categories,
      tags:       posts.tags,
    })
    .from(posts)
    .all()
  return c.json(rows.map(parsePostSummary))
})

// 詳細: content を含めて返す
app.get('/posts/:slug', async (c) => {
  const slug = c.req.param('slug')
  const db = drizzle(c.env.DB)
  const rows = await db.select().from(posts).where(eq(posts.slug, slug)).all()
  if (rows.length === 0) return c.json({ error: 'Not found' }, 404)
  return c.json(parsePost(rows[0]))
})

function parsePostSummary(row: Omit<typeof posts.$inferSelect, 'content'>) {
  return {
    ...row,
    categories: JSON.parse(row.categories) as string[],
    tags: JSON.parse(row.tags) as string[],
  }
}

function parsePost(row: typeof posts.$inferSelect) {
  return {
    ...row,
    categories: JSON.parse(row.categories) as string[],
    tags: JSON.parse(row.tags) as string[],
  }
}

export default app
