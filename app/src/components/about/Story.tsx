import Eyebrow from "@/components/common/Eyebrow"

export default function Story() {
  return (
    <div className="max-w-[64ch]">
      <Eyebrow>Story</Eyebrow>
      <h2 className="mb-1 mt-3.5 text-[clamp(1.5rem,1.2rem+1.4vw,2.1rem)]">設計と実装を、行き来する。</h2>
      <p className="mt-4 text-muted-foreground">
        キャリアのはじまりは <strong className="font-semibold text-foreground">PHP / CodeIgniter</strong> でのWeb開発でした。そこからモダンフロントエンドへ軸足を移し、いまは <strong className="font-semibold text-foreground">Vue.js</strong> と <strong className="font-semibold text-foreground">React</strong> を主役に、コンポーネント設計や状態管理、パフォーマンスチューニングに取り組んでいます。
      </p>
      <p className="mt-4 text-muted-foreground">
        「使う人にとって気持ちいいか」と「半年後の自分が読めるコードか」。この2つを行き来しながらつくるのが好きです。地味だけど効く改善を、こつこつ積み重ねていくタイプです。
      </p>
    </div>
  )
}
