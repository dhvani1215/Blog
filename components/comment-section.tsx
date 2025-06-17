"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send } from "lucide-react"

interface Comment {
  id: string
  author: string
  content: string
  createdAt: string
}

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "John Doe",
      content: "Great article! Very informative and well-written.",
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      author: "Jane Smith",
      content: "Thanks for sharing this. I learned a lot from your explanation.",
      createdAt: "2024-01-15T14:20:00Z",
    },
  ])

  const [newComment, setNewComment] = useState({
    author: "",
    content: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.author.trim() || !newComment.content.trim()) {
      return
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: newComment.author.trim(),
      content: newComment.content.trim(),
      createdAt: new Date().toISOString(),
    }

    setComments((prev) => [...prev, comment])
    setNewComment({ author: "", content: "" })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Comments ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your name"
            value={newComment.author}
            onChange={(e) => setNewComment((prev) => ({ ...prev, author: e.target.value }))}
            required
          />
          <Textarea
            placeholder="Write your comment..."
            value={newComment.content}
            onChange={(e) => setNewComment((prev) => ({ ...prev, content: e.target.value }))}
            rows={4}
            required
          />
          <Button type="submit" className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Post Comment
          </Button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-l-4 border-blue-200 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <p className="text-center text-gray-500 py-8">No comments yet. Be the first to comment!</p>
        )}
      </CardContent>
    </Card>
  )
}
