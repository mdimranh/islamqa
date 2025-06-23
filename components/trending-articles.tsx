import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Share2, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

const trendingArticles = [
  {
    id: 1,
    title: "The Importance of Seeking Knowledge in Islam",
    excerpt:
      "Islam places tremendous emphasis on seeking knowledge. The Quran and Hadith contain numerous verses and sayings that highlight the virtue of learning and teaching.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Dr. Aisha Muhammad",
    authorAvatar: "/placeholder-scholar.jpg",
    category: "Islamic Education",
    readTime: "5 min read",
    views: 1250,
    likes: 89,
    shares: 23,
    publishedAt: "2 days ago",
    isVerified: true,
  },
  {
    id: 2,
    title: "Understanding the Five Pillars of Islam",
    excerpt:
      "A comprehensive guide to the fundamental practices that form the foundation of a Muslim's faith and practice, with detailed explanations and references.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Sheikh Omar Al-Farisi",
    authorAvatar: "/placeholder-scholar.jpg",
    category: "Aqeedah",
    readTime: "8 min read",
    views: 2100,
    likes: 156,
    shares: 45,
    publishedAt: "1 week ago",
    isVerified: true,
  },
  {
    id: 3,
    title: "Prophetic Medicine: Natural Remedies from Sunnah",
    excerpt:
      "Exploring the healing practices and natural remedies mentioned in authentic Hadith literature and their relevance in modern times.",
    image: "/placeholder.svg?height=200&width=300",
    author: "Dr. Fatima Al-Zahra",
    authorAvatar: "/placeholder-scholar.jpg",
    category: "Sunnah",
    readTime: "6 min read",
    views: 890,
    likes: 67,
    shares: 18,
    publishedAt: "3 days ago",
    isVerified: true,
  },
]

export function TrendingArticles() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Trending Articles</h2>
        <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          View All Articles
        </Button>
      </div>

      <div className="grid gap-6">
        {trendingArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
              </div>

              <div className="md:w-2/3">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 hover:text-emerald-700 cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mt-2 line-clamp-2">{article.excerpt}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={article.authorAvatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs bg-emerald-100 text-emerald-700">
                          {article.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium text-gray-800">{article.author}</span>
                          {article.isVerified && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{article.publishedAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4" />
                        <span>{article.shares}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
