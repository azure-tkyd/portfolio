import { Link } from "react-router"
import { ArrowUpRight } from "lucide-react"
import { usePosts } from "@/hooks/usePosts"
import Tag from "@/components/common/Tag"

export default function LatestPosts() {
  const { posts, loading } = usePosts()
  const latest = posts.slice(0, 3)
console.log(posts)
  if (loading) {
    return <p className="py-8 font-mono text-sm text-muted-foreground">読み込み中...</p>
  }

  return (
    <div className="border-t border-border">
      {latest.map((post, i) => (
        <Link
          key={post.slug}
          to="/blog"
          className="group grid items-center gap-4 border-b border-border px-2 py-6 transition-colors hover:bg-secondary sm:grid-cols-[78px_1fr_auto]"
        >
          <span className="hidden font-mono text-[0.8rem] text-muted-foreground sm:block">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[1.1rem] font-bold tracking-[-0.015em] transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag, ti) => (
                <Tag key={tag} accent={ti === 0}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="whitespace-nowrap font-mono text-[0.78rem] text-muted-foreground">{post.date}</span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:rotate-0 group-hover:border-primary group-hover:bg-primary group-hover:text-white -rotate-45">
              <ArrowUpRight className="size-[17px]" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
