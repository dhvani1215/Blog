export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  category: string
  tags: string[]
  image: string
  readTime: number
  featured: boolean
}

export interface Comment {
  id: string
  postId: string
  author: string
  email: string
  content: string
  createdAt: string
  approved: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
}
