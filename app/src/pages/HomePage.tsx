import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Hero from "@/components/home/Hero"
import MetaStrip from "@/components/home/MetaStrip"
import LatestPosts from "@/components/home/LatestPosts"
import SectionHeading from "@/components/common/SectionHeading"
import CtaBand from "@/components/common/CtaBand"

export default function HomePage() {
  return (
    <>
      <title>Rust and Mackerel — Frontend Engineer</title>
      <meta name="description" content="フロントエンドエンジニア Rust and Mackerel のポートフォリオ。Vue / React / Laravel を中心に、設計と実装を行き来するものづくり。" />

      <Hero />

      <div className="mx-auto max-w-[var(--max-w-content)] px-6 pt-[clamp(40px,6vw,64px)]">
        <MetaStrip />
      </div>

      <section className="mx-auto max-w-[var(--max-w-content)] px-6 py-[clamp(56px,8vw,104px)]">
        <SectionHeading
          eyebrow="Latest"
          title="最新のブログ記事"
          description="実装で詰まったこと、試した設計、読んだ技術書のメモ。"
          right={
            <Button variant="outline" asChild>
              <Link to="/blog">すべての記事</Link>
            </Button>
          }
        />
        <LatestPosts />
      </section>

      <div className="mx-auto max-w-[var(--max-w-content)] px-6 pb-[clamp(56px,8vw,104px)]">
        <CtaBand
          title="いっしょに、いいものをつくりませんか。"
          description="制作の相談、技術の話、なんでもお気軽に。"
          primaryLabel="メールする"
          secondaryLabel="プロフィールを見る"
          secondaryHref="/about"
        />
      </div>
    </>
  )
}
