import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { Category } from "@/types"

const filters: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "vue", label: "Vue" },
  { value: "react", label: "React" },
  { value: "laravel", label: "Laravel" },
  { value: "perf", label: "パフォーマンス" },
  { value: "note", label: "読書メモ" },
]

interface PostFilterProps {
  value: Category | "all"
  onChange: (v: Category | "all") => void
}

export default function PostFilter({ value, onChange }: PostFilterProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(v) => { if (v) onChange(v as Category | "all") }}
      className="mb-8"
    >
      {filters.map((f) => (
        <ToggleGroupItem key={f.value} value={f.value}>
          {f.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
