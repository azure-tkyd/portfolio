import type { Post, PostDetail } from "@/types"

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ""

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}

export async function fetchPost(slug: string): Promise<PostDetail> {
  const res = await fetch(`${BASE_URL}/posts/${slug}`)
  if (!res.ok) throw new Error(`Post not found: ${slug}`)
  return res.json()
}
