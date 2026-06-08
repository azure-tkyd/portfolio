export type Category = "vue" | "react" | "laravel" | "perf" | "note";

export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  categories: Category[];
  tags: string[];
}

export interface PostDetail extends Post {
  content: string;
}

export interface Skill {
  name: string;
  level: string;
  value: number;
  note: string;
}

export interface TimelineItem {
  when: string;
  role: string;
  org: string;
  body: string;
}

export interface NavItem {
  href: string;
  label: string;
}
