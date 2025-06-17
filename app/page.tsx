import { Suspense } from "react"
import BlogCard from "@/components/blog-card"
import SearchBar from "@/components/search-bar"
import CategoryFilter from "@/components/category-filter"
import { getBlogPosts } from "@/lib/blog-data"

interface HomeProps {
  searchParams: { search?: string; category?: string }
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getBlogPosts()

  // Filter posts based on search and category
  let filteredPosts = posts

  if (searchParams.search) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchParams.search!.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchParams.search!.toLowerCase()),
    )
  }

  if (searchParams.category && searchParams.category !== "all") {
    filteredPosts = filteredPosts.filter((post) => post.category.toLowerCase() === searchParams.category!.toLowerCase())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 dark:from-violet-900/20 dark:to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
            TechBlog
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Discover the latest in technology, programming, and innovation
          </p>
          <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md p-6 sticky top-24 animate-in slide-in-from-left-4 duration-1000">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>
              <CategoryFilter />

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">About</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Welcome to TechBlog, your go-to source for the latest in technology, programming tutorials, and
                  industry insights.
                </p>
              </div>
            </div>
          </aside>

          {/* Blog Posts */}
          <main className="lg:w-3/4">
            <div className="mb-6 animate-in slide-in-from-right-4 duration-1000">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {searchParams.search ? `Search results for "${searchParams.search}"` : "Latest Posts"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{filteredPosts.length} posts found</p>
            </div>

            <Suspense fallback={<div>Loading posts...</div>}>
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="animate-in slide-in-from-bottom-4 duration-1000"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </Suspense>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 animate-in slide-in-from-bottom-4 duration-1000">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No posts found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
