"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const categories = ["All", "Technology", "Programming", "Web Development", "AI & ML", "Mobile"]

export default function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams?.get("category") || "all"

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "")

    if (category.toLowerCase() === "all") {
      params.delete("category")
    } else {
      params.set("category", category.toLowerCase())
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={currentCategory === category.toLowerCase() ? "default" : "ghost"}
          className="w-full justify-start hover:bg-violet-100 dark:hover:bg-violet-900"
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
