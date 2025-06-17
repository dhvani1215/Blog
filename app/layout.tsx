import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Home, PenTool, User, Mail } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import NewsletterPopup from "@/components/newsletter-popup"
import FloatingActionButton from "@/components/floating-action-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechBlog - Latest Technology Insights",
  description: "Discover the latest in technology, programming, and innovation with our comprehensive blog platform.",
  keywords: "technology, programming, web development, AI, machine learning, mobile development",
  authors: [{ name: "TechBlog Team" }],
  openGraph: {
    title: "TechBlog - Latest Technology Insights",
    description: "Discover the latest in technology, programming, and innovation",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Navigation */}
          <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-violet-200 dark:border-violet-800 sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
                >
                  TechBlog
                </Link>

                <div className="flex items-center space-x-6">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>About</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="/admin"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <PenTool className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Admin</span>
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    TechBlog
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Your go-to source for the latest in technology, programming tutorials, and industry insights. Join
                    thousands of developers who trust us for quality content.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors cursor-pointer">
                      <span className="text-sm font-bold">T</span>
                    </div>
                    <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors cursor-pointer">
                      <span className="text-sm font-bold">G</span>
                    </div>
                    <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors cursor-pointer">
                      <span className="text-sm font-bold">L</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-violet-400">Categories</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link href="/?category=technology" className="hover:text-violet-400 transition-colors">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link href="/?category=programming" className="hover:text-violet-400 transition-colors">
                        Programming
                      </Link>
                    </li>
                    <li>
                      <Link href="/?category=web-development" className="hover:text-violet-400 transition-colors">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/?category=ai-ml" className="hover:text-violet-400 transition-colors">
                        AI & ML
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-violet-400">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link href="/about" className="hover:text-violet-400 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-violet-400 transition-colors">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin" className="hover:text-violet-400 transition-colors">
                        Write for Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-violet-400 transition-colors">
                        Newsletter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 TechBlog. All rights reserved. Made with ❤️ for developers.</p>
              </div>
            </div>
          </footer>

          {/* Floating Components */}
          <NewsletterPopup />
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
