import { useState, useMemo } from "react"
import { usePosts } from "@/hooks/usePosts"
import type { Category } from "@/types"
import PostRow from "./PostRow"
import PostFilter from "./PostFilter"

export default function PostList() {
  const { posts, loading, error } = usePosts()
  const [cat, setCat] = useState<Category | "all">("all")

  const shown = useMemo(
    () => cat === "all" ? posts : posts.filter((p) => p.categories.includes(cat)),
    [cat, posts]
  )

  if (loading) {
    return <p className="py-12 text-center font-mono text-sm text-muted-foreground">読み込み中...</p>
  }
  if (error) {
    return <p className="py-12 text-center font-mono text-sm text-destructive">記事の取得に失敗しました。</p>
  }

  return (
    <>
      <PostFilter value={cat} onChange={setCat} />
      <div className="border-t border-border">
        {shown.map((p, i) => (
          <PostRow key={p.slug} post={p} index={i + 1} />
        ))}
        {shown.length === 0 && (
          <p className="py-12 text-center font-mono text-sm text-muted-foreground">
            該当する記事がありません。
          </p>
        )}
      </div>
    </>
  )
}
