import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Eyebrow from "@/components/common/Eyebrow"
import Tag from "@/components/common/Tag"
import ImagePlaceholder from "@/components/common/ImagePlaceholder"

const stackTags = [
  { label: "Vue.js", accent: true },
  { label: "React" },
  { label: "TypeScript" },
  { label: "Laravel" },
  { label: "PHP" },
]

export default function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--border) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.6) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          WebkitMaskImage: "radial-gradient(120% 90% at 70% 10%, #000 35%, transparent 78%)",
          maskImage: "radial-gradient(120% 90% at 70% 10%, #000 35%, transparent 78%)",
        }} />
      <div className="relative z-10 mx-auto max-w-[var(--max-w-content)] px-6 py-[clamp(56px,8vw,96px)]">
        <div className="grid items-center gap-[clamp(32px,5vw,64px)] md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Portfolio · 2026</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.5rem,1.6rem+4.2vw,4.6rem)]">
              つくって、<span className="text-primary">直して、</span>また速くする。
            </h1>
            <p className="mt-5 max-w-[46ch] text-[1.1rem] text-muted-foreground">
              フロントエンドを軸に、Vue / React の画面実装から Laravel のAPI設計まで。使う人の体験と、保守できるコードの両方を大切にしています。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/blog">
                  ブログを読む
                  <ArrowRight className="size-[17px]" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">自己紹介</Link>
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {stackTags.map((t) => (
                <Tag key={t.label} accent={t.accent}>{t.label}</Tag>
              ))}
            </div>
          </div>
          <ImagePlaceholder ratio="4/5" label="portrait / 4:5" className="hidden md:grid" />
        </div>
      </div>
    </section>
  )
}
