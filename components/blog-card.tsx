import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, User } from "lucide-react"
import type { BlogPost } from "@/lib/types"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime} min
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-violet-600 dark:hover:text-violet-400 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-1" />
            {formatDate(post.publishedAt)}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
