import Eyebrow from "@/components/common/Eyebrow"

export default function BlogIntro() {
  return (
    <div>
      <Eyebrow>Blog</Eyebrow>
      <h1 className="mt-3.5 max-w-[18ch] text-[clamp(2.2rem,1.5rem+3vw,3.6rem)]">実装の記録と、技術のメモ。</h1>
      <p className="mt-4 max-w-[48ch] text-muted-foreground">
        フロントエンドを中心に、設計・パフォーマンス・読んだ本のことなど。気になるテーマで絞り込めます。
      </p>
    </div>
  )
}
