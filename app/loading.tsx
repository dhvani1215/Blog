export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="h-12 bg-white/20 rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
          <div className="h-6 bg-white/20 rounded-lg mb-8 max-w-2xl mx-auto animate-pulse"></div>
          <div className="h-12 bg-white/20 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-10 bg-gray-100 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <main className="lg:w-3/4">
            <div className="mb-6">
              <div className="h-8 bg-gray-200 rounded mb-2 max-w-md animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded max-w-xs animate-pulse"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
