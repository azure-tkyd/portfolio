const stats = [
  { dt: "Experience", dd: "6", unit: " yrs" },
  { dt: "Main stack", dd: "Vue", unit: " / React" },
  { dt: "Backend", dd: "Laravel", unit: "" },
  { dt: "Articles", dd: "40", unit: " +" },
]

export default function MetaStrip() {
  return (
    <dl className="overflow-hidden rounded-[var(--radius)] border border-border bg-card grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.dt} className={`px-6 py-5 ${i < stats.length - 1 ? "border-b border-border md:border-b-0 md:border-r" : ""} ${i === 1 ? "md:border-r" : ""}`}>
          <dt className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">{s.dt}</dt>
          <dd className="mt-1.5 font-display text-[1.7rem] font-bold tracking-tight">
            {s.dd}
            {s.unit && <small className="text-[0.92rem] font-medium text-muted-foreground">{s.unit}</small>}
          </dd>
        </div>
      ))}
    </dl>
  )
}
