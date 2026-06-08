import AboutHero from "@/components/about/AboutHero"
import Story from "@/components/about/Story"
import SkillGrid from "@/components/about/SkillGrid"
import Timeline from "@/components/about/Timeline"
import SectionHeading from "@/components/common/SectionHeading"
import CtaBand from "@/components/common/CtaBand"

export default function AboutPage() {
  return (
    <>
      <title>About — Rust and Mackerel</title>
      <meta name="description" content="フロントエンドエンジニア Rust and Mackerel の自己紹介。スキルスタックと経歴。" />

      <section className="mx-auto max-w-[var(--max-w-content)] px-6 py-[clamp(56px,8vw,104px)]">
        <AboutHero />
      </section>

      <div className="mx-auto max-w-[var(--max-w-content)] px-6 pb-[clamp(40px,6vw,72px)]">
        <Story />
      </div>

      <section className="mx-auto max-w-[var(--max-w-content)] px-6 py-[clamp(32px,5vw,56px)]">
        <SectionHeading
          eyebrow="Skills"
          title="技術スタック"
          description="主に触れている言語・フレームワークと、得意な領域。"
        />
        <SkillGrid />
      </section>

      <section className="mx-auto max-w-[var(--max-w-content)] px-6 pb-[clamp(56px,8vw,96px)]">
        <SectionHeading eyebrow="Career" title="これまでの歩み" />
        <Timeline />
      </section>

      <div id="contact" className="mx-auto max-w-[var(--max-w-content)] px-6 pb-[clamp(56px,8vw,104px)]">
        <CtaBand
          title="お気軽にどうぞ。"
          description="お仕事の相談も、技術のおしゃべりも歓迎です。"
          primaryLabel="メールする"
          secondaryLabel="GitHub"
          secondaryHref="https://github.com/"
        />
      </div>
    </>
  )
}
