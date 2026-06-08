import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import Eyebrow from "@/components/common/Eyebrow"
import ImagePlaceholder from "@/components/common/ImagePlaceholder"

export default function AboutHero() {
  return (
    <div className="grid items-center gap-[clamp(32px,5vw,64px)] md:grid-cols-[0.9fr_1.1fr]">
      <ImagePlaceholder ratio="1/1" label="portrait / 1:1" />
      <div>
        <Eyebrow>About me</Eyebrow>
        <h1 className="mt-4 text-[clamp(2.2rem,1.4rem+3vw,3.6rem)]">
          サバと、Rustと、<br />日々のものづくり。
        </h1>
        <p className="mt-4 text-[1.08rem] text-muted-foreground">
          はじめまして。Rust and Mackerel という名前で活動している、フロントエンドエンジニアです。Vue / React を中心に画面を実装しつつ、Laravel や CodeIgniter でサーバーサイドも書きます。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><Link to="/blog">ブログを読む</Link></Button>
          <Button variant="outline" asChild><a href="#contact">連絡する</a></Button>
        </div>
      </div>
    </div>
  )
}
