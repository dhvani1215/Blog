"use client"

import { useState } from "react"
import { Plus, MessageCircle, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { icon: BookOpen, label: "Read Later", href: "#" },
    { icon: Share2, label: "Share", href: "#" },
    { icon: MessageCircle, label: "Feedback", href: "/contact" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {/* Action buttons */}
        <div
          className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {actions.map((action, index) => (
            <div key={action.label} className="flex items-center space-x-3">
              <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-sm whitespace-nowrap">
                {action.label}
              </span>
              <Button
                asChild
                size="sm"
                className="h-10 w-10 rounded-full bg-violet-600 hover:bg-violet-700 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={action.href}>
                  <action.icon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Main FAB */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full bg-violet-600 hover:bg-violet-700 shadow-lg transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
