import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, Clock, CheckCircle } from "lucide-react"

const featuredQuestions = [
  {
    id: 1,
    title: "What is the ruling on cryptocurrency trading in Islam?",
    excerpt:
      "I want to understand the Islamic perspective on trading cryptocurrencies like Bitcoin and Ethereum. Are they considered halal or haram?",
    categories: ["Fiqh", "Business & Finance"],
    author: "Ahmad Rahman",
    authorAvatar: "/placeholder-user.jpg",
    scholar: "Dr. Yusuf Al-Qaradawi",
    scholarAvatar: "/placeholder-scholar.jpg",
    answers: 3,
    likes: 45,
    timeAgo: "2 hours ago",
    isAnswered: true,
    isVerified: true,
  },
  {
    id: 2,
    title: "How to perform Wudu correctly according to Sunnah?",
    excerpt:
      "I would like to learn the complete method of performing Wudu as taught by Prophet Muhammad (PBUH) with all the recommended actions.",
    categories: ["Fiqh", "Sunnah"],
    author: "Fatima Ali",
    authorAvatar: "/placeholder-user.jpg",
    scholar: "Sheikh Abdul Rahman",
    scholarAvatar: "/placeholder-scholar.jpg",
    answers: 2,
    likes: 67,
    timeAgo: "4 hours ago",
    isAnswered: true,
    isVerified: true,
  },
  {
    id: 3,
    title: "Is it permissible to work in a bank that deals with interest?",
    excerpt:
      "I have a job offer from a conventional bank. What does Islam say about working in institutions that deal with riba (interest)?",
    categories: ["Fiqh", "Business & Finance"],
    author: "Omar Hassan",
    authorAvatar: "/placeholder-user.jpg",
    answers: 0,
    likes: 23,
    timeAgo: "6 hours ago",
    isAnswered: false,
    isVerified: false,
  },
]

export function FeaturedQuestions() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Questions</h2>
        <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          View All Questions
        </Button>
      </div>

      <div className="space-y-4">
        {featuredQuestions.map((question) => (
          <Card key={question.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {question.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                    {question.isAnswered && (
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Answered
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-emerald-700 cursor-pointer">
                    {question.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{question.excerpt}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={question.authorAvatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs bg-gray-100">
                        {question.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{question.author}</span>
                  </div>

                  {question.isAnswered && question.scholar && (
                    <>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={question.scholarAvatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs bg-emerald-100 text-emerald-700">
                            {question.scholar
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-emerald-700 font-medium">{question.scholar}</span>
                        {question.isVerified && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{question.answers}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{question.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{question.timeAgo}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
