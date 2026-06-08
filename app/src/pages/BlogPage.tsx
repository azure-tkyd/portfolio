import BlogIntro from "@/components/blog/BlogIntro"
import PostList from "@/components/blog/PostList"

export default function BlogPage() {
  return (
    <>
      <title>Blog — Rust and Mackerel</title>
      <meta name="description" content="フロントエンドエンジニア Rust and Mackerel の技術ブログ。Vue / React / Laravel の実装メモ。" />

      <div className="mx-auto max-w-[var(--max-w-content)] px-6 pb-2 pt-[clamp(48px,7vw,84px)]">
        <BlogIntro />
      </div>

      <section className="mx-auto max-w-[var(--max-w-content)] px-6 pt-[clamp(32px,4vw,48px)] pb-[clamp(56px,8vw,104px)]">
        <PostList />
      </section>
    </>
  )
}
