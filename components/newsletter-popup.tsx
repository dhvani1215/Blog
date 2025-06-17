"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("newsletter-popup-seen")
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 5000) // Show after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("newsletter-popup-seen", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        handleClose()
      }, 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <Card className="w-full max-w-md relative animate-in slide-in-from-bottom-4 duration-500 border-violet-200 dark:border-violet-800">
        <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={handleClose}>
          <X className="h-4 w-4" />
        </Button>

        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900">
            <Mail className="h-6 w-6 text-violet-600 dark:text-violet-400" />
          </div>
          <CardTitle className="text-xl font-bold">Stay Updated!</CardTitle>
          <CardDescription>Get the latest tech insights and tutorials delivered to your inbox.</CardDescription>
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-violet-200 focus:border-violet-500 dark:border-violet-800"
              />
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                Subscribe Now
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-green-600 dark:text-green-400 font-semibold mb-2">✓ Successfully subscribed!</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Thank you for joining our newsletter.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
