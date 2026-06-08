import { useState, useEffect } from "react"
import type { Post } from "@/types"
import { fetchPosts } from "@/lib/api"

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}
