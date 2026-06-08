import { ArrowUpRight } from "lucide-react"
import type { Post } from "@/types"
import Tag from "@/components/common/Tag"

interface PostRowProps {
  post: Post
  index: number
}

export default function PostRow({ post, index }: PostRowProps) {
  return (
    <div className="group grid items-center gap-4 border-b border-border px-2 py-6 transition-colors hover:bg-secondary sm:grid-cols-[78px_1fr_auto]">
      <span className="hidden font-mono text-[0.8rem] text-muted-foreground sm:block">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-[1.1rem] font-bold tracking-[-0.015em] transition-colors group-hover:text-primary">
          {post.title}
        </h3>
<div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <Tag key={tag} accent={i === 0}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="whitespace-nowrap font-mono text-[0.78rem] text-muted-foreground">{post.date}</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight className="size-[17px]" />
        </span>
      </div>
    </div>
  )
}
