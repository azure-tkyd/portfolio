import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const posts = sqliteTable("posts", {
  id:         integer("id").primaryKey({ autoIncrement: true }),
  slug:       text("slug").notNull().unique(),
  title:      text("title").notNull(),
  content:    text("content").notNull(),
  date:       text("date").notNull(),
  categories: text("categories").notNull(), // JSON: ["vue","react"]
  tags:       text("tags").notNull(),       // JSON: ["Vue","React"]
})
