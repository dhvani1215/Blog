"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Home, Code, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const slides = [
    {
      id: 1,
      title: "TechBlog Platform",
      subtitle: "Modern Blog Platform with Advanced Features",
      type: "title",
      content: {
        description:
          "A comprehensive, production-ready blog platform built with Next.js 15, featuring modern design, animations, and user engagement tools.",
        highlights: [
          "Next.js 15 with App Router",
          "Violet & Black Theme",
          "Dark/Light Mode Toggle",
          "Responsive Design",
        ],
      },
    },
    {
      id: 2,
      title: "Introduction",
      subtitle: "What is TechBlog Platform?",
      type: "content",
      content: {
        description:
          "TechBlog is a modern, full-featured blogging platform designed for technology content creators and readers.",
        points: [
          "Built with cutting-edge web technologies",
          "Focuses on user experience and performance",
          "Designed for scalability and maintainability",
          "Features modern UI/UX with smooth animations",
          "Optimized for both content creators and readers",
        ],
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: 3,
      title: "Technical Architecture",
      subtitle: "Built with Modern Technologies",
      type: "tech",
      content: {
        description:
          "Our platform leverages the latest web development technologies for optimal performance and developer experience.",
        technologies: [
          { name: "Next.js 15", description: "React framework with App Router", icon: "⚛️" },
          { name: "TypeScript", description: "Type-safe development", icon: "📘" },
          { name: "Tailwind CSS", description: "Utility-first styling", icon: "🎨" },
          { name: "Shadcn/UI", description: "Modern component library", icon: "🧩" },
          { name: "Next Themes", description: "Dark/Light mode support", icon: "🌙" },
          { name: "Lucide Icons", description: "Beautiful icon library", icon: "✨" },
        ],
      },
    },
    {
      id: 4,
      title: "Key Features",
      subtitle: "What Makes Our Platform Special",
      type: "features",
      content: {
        description: "Comprehensive features designed for modern blogging needs",
        features: [
          {
            icon: <Home className="w-6 h-6" />,
            title: "Homepage",
            description: "Beautiful hero section with search and category filtering",
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Blog Posts",
            description: "Individual post pages with comments and social sharing",
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "About & Contact",
            description: "Professional pages with team info and contact forms",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Admin Panel",
            description: "Content management system for creating posts",
          },
        ],
      },
    },
    {
      id: 5,
      title: "How It Works",
      subtitle: "Platform Workflow",
      type: "workflow",
      content: {
        description: "Simple and intuitive workflow for both readers and content creators",
        steps: [
          {
            step: "1",
            title: "Content Discovery",
            description: "Users browse posts through search, categories, or homepage feed",
            details: ["Real-time search functionality", "Category-based filtering", "Featured posts highlighting"],
          },
          {
            step: "2",
            title: "Reading Experience",
            description: "Optimized reading experience with comments and engagement",
            details: ["Clean, readable typography", "Comment system", "Social sharing", "Reading time estimation"],
          },
          {
            step: "3",
            title: "Content Creation",
            description: "Admin panel for creating and managing blog content",
            details: ["Rich text editor", "Category management", "Image upload", "SEO optimization"],
          },
          {
            step: "4",
            title: "User Engagement",
            description: "Features to keep users engaged and coming back",
            details: ["Newsletter signup", "Floating action buttons", "Theme customization", "Responsive design"],
          },
        ],
      },
    },
    {
      id: 6,
      title: "Use Cases",
      subtitle: "Who Can Benefit?",
      type: "uses",
      content: {
        description: "Our platform serves various types of users and organizations",
        useCases: [
          {
            title: "Tech Companies",
            description: "Share company updates, technical insights, and thought leadership",
            examples: ["Product announcements", "Engineering blogs", "Company culture posts"],
          },
          {
            title: "Individual Developers",
            description: "Build personal brand and share knowledge with the community",
            examples: ["Tutorial posts", "Project showcases", "Career insights"],
          },
          {
            title: "Educational Institutions",
            description: "Provide learning resources and course materials",
            examples: ["Course materials", "Research publications", "Student showcases"],
          },
          {
            title: "Tech Communities",
            description: "Foster community engagement and knowledge sharing",
            examples: ["Community updates", "Event announcements", "Member spotlights"],
          },
        ],
      },
    },
    {
      id: 7,
      title: "Advantages",
      subtitle: "Why Choose Our Platform?",
      type: "advantages",
      content: {
        description: "Key benefits that make our platform stand out",
        advantages: [
          {
            icon: "🚀",
            title: "Performance Optimized",
            description: "Built with Next.js for optimal loading speeds and SEO",
          },
          {
            icon: "📱",
            title: "Fully Responsive",
            description: "Perfect experience across all devices and screen sizes",
          },
          {
            icon: "🎨",
            title: "Modern Design",
            description: "Beautiful UI with smooth animations and transitions",
          },
          {
            icon: "🔧",
            title: "Easy to Customize",
            description: "Modular architecture allows for easy modifications",
          },
          {
            icon: "🔍",
            title: "SEO Friendly",
            description: "Built-in SEO optimization for better search rankings",
          },
          {
            icon: "♿",
            title: "Accessible",
            description: "WCAG compliant with proper ARIA labels and keyboard navigation",
          },
        ],
      },
    },
    {
      id: 8,
      title: "Disadvantages",
      subtitle: "Current Limitations",
      type: "disadvantages",
      content: {
        description: "Areas where the platform could be improved",
        disadvantages: [
          {
            icon: "💾",
            title: "Static Data",
            description: "Currently uses mock data instead of a real database",
            impact: "Limited to predefined content",
          },
          {
            icon: "👤",
            title: "No User Authentication",
            description: "Missing user login and registration system",
            impact: "Cannot track user preferences or personalize content",
          },
          {
            icon: "📝",
            title: "Basic Editor",
            description: "Simple text editor without rich formatting options",
            impact: "Limited content creation capabilities",
          },
          {
            icon: "🔄",
            title: "No Real-time Updates",
            description: "Content updates require page refresh",
            impact: "Less dynamic user experience",
          },
        ],
      },
    },
    {
      id: 9,
      title: "Future Scope",
      subtitle: "Planned Enhancements",
      type: "future",
      content: {
        description: "Roadmap for future development and improvements",
        phases: [
          {
            phase: "Phase 1: Core Infrastructure",
            timeline: "Next 3 months",
            features: [
              "Database integration (PostgreSQL/MongoDB)",
              "User authentication system",
              "Rich text editor with media support",
              "Real-time comment system",
            ],
          },
          {
            phase: "Phase 2: Advanced Features",
            timeline: "3-6 months",
            features: [
              "User profiles and dashboards",
              "Social media integration",
              "Email newsletter system",
              "Analytics and reporting",
            ],
          },
          {
            phase: "Phase 3: Enterprise Features",
            timeline: "6-12 months",
            features: [
              "Multi-tenant architecture",
              "Advanced SEO tools",
              "Content scheduling",
              "API for third-party integrations",
            ],
          },
        ],
      },
    },
    {
      id: 10,
      title: "Technology Roadmap",
      subtitle: "Future Technical Enhancements",
      type: "tech-roadmap",
      content: {
        description: "Technical improvements and new technologies to be integrated",
        roadmap: [
          {
            category: "Backend",
            items: ["Supabase/Neon database", "Server actions optimization", "Caching strategies", "API rate limiting"],
          },
          {
            category: "Frontend",
            items: ["Progressive Web App", "Offline reading", "Advanced animations", "Voice search"],
          },
          {
            category: "DevOps",
            items: ["CI/CD pipeline", "Automated testing", "Performance monitoring", "Error tracking"],
          },
          {
            category: "AI Integration",
            items: ["Content recommendations", "Auto-tagging", "Writing assistance", "Sentiment analysis"],
          },
        ],
      },
    },
    {
      id: 11,
      title: "Demo & Live Preview",
      subtitle: "See It In Action",
      type: "demo",
      content: {
        description: "Experience the platform's features through our live demo",
        demoFeatures: [
          "Browse through sample blog posts",
          "Test the search and filtering functionality",
          "Try the dark/light mode toggle",
          "Explore the admin panel",
          "View responsive design on different screen sizes",
        ],
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: 12,
      title: "Thank You",
      subtitle: "Questions & Discussion",
      type: "conclusion",
      content: {
        description: "Thank you for your attention! Let's discuss the project and answer any questions.",
        contact: {
          github: "github.com/techblog-platform",
          demo: "techblog-demo.vercel.app",
          email: "hello@techblog.com",
        },
      },
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300">{slide.subtitle}</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">{slide.content.description}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {slide.content.highlights.map((highlight: string, index: number) => (
                <div key={index} className="bg-violet-100 dark:bg-violet-900 p-4 rounded-lg">
                  <p className="text-violet-800 dark:text-violet-200 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "content":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">{slide.content.description}</p>
              <ul className="space-y-3">
                {slide.content.points.map((point: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={slide.content.image || "/placeholder.svg"}
                alt="Platform overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )

      case "tech":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              {slide.content.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slide.content.technologies.map((tech: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{tech.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "features":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {slide.content.features.map((feature: any, index: number) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 p-3 bg-violet-100 dark:bg-violet-900 rounded-lg text-violet-600 dark:text-violet-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "workflow":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="space-y-6">
              {slide.content.steps.map((step: any, index: number) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{step.description}</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {step.details.map((detail: string, idx: number) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "uses":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {slide.content.useCases.map((useCase: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-violet-600 dark:text-violet-400">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Examples:</p>
                      <ul className="space-y-1">
                        {useCase.examples.map((example: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2"
                          >
                            <div className="w-1 h-1 bg-violet-400 rounded-full"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "advantages":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slide.content.advantages.map((advantage: any, index: number) => (
                <div key={index} className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-400">{advantage.title}</h3>
                  <p className="text-green-600 dark:text-green-300 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "disadvantages":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {slide.content.disadvantages.map((disadvantage: any, index: number) => (
                <div
                  key={index}
                  className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{disadvantage.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-400">
                        {disadvantage.title}
                      </h3>
                      <p className="text-orange-600 dark:text-orange-300 text-sm mb-2">{disadvantage.description}</p>
                      <p className="text-orange-500 dark:text-orange-400 text-xs italic">
                        Impact: {disadvantage.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "future":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="space-y-8">
              {slide.content.phases.map((phase: any, index: number) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold">{phase.phase}</h3>
                        <span className="text-sm bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 px-3 py-1 rounded-full">
                          {phase.timeline}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < slide.content.phases.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-violet-600 to-purple-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      case "tech-roadmap":
        return (
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">{slide.content.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {slide.content.roadmap.map((category: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-violet-600 dark:text-violet-400">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "demo":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">{slide.content.description}</p>
              <div className="relative h-64 rounded-lg overflow-hidden max-w-2xl mx-auto">
                <Image
                  src={slide.content.image || "/placeholder.svg"}
                  alt="Demo preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-center">Try These Features:</h3>
              <ul className="space-y-3">
                {slide.content.demoFeatures.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <Button asChild className="bg-violet-600 hover:bg-violet-700">
                  <Link href="/">View Live Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )

      case "conclusion":
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">{slide.subtitle}</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{slide.content.description}</p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-lg max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>GitHub:</strong> {slide.content.contact.github}
                </p>
                <p>
                  <strong>Demo:</strong> {slide.content.contact.demo}
                </p>
                <p>
                  <strong>Email:</strong> {slide.content.contact.email}
                </p>
              </div>
            </div>
            <div className="text-4xl">🙏</div>
          </div>
        )

      default:
        return <div>Slide content not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-violet-200 dark:border-violet-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-violet-600 hover:text-violet-800 transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-semibold">TechBlog Platform Presentation</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentSlide + 1} / {slides.length}
              </span>
              <Button variant="ghost" size="sm" onClick={() => setIsAutoPlay(!isAutoPlay)} className="text-violet-600">
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Slide Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-12 min-h-[600px]">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{slides[currentSlide].title}</h2>
              <p className="text-lg text-violet-600 dark:text-violet-400">{slides[currentSlide].subtitle}</p>
            </div>

            <div className="animate-in slide-in-from-right-4 duration-500">
              {renderSlideContent(slides[currentSlide])}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-violet-600" : "bg-gray-300 dark:bg-gray-600 hover:bg-violet-400"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
