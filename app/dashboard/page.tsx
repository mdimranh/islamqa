"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, BookOpen, Heart, Eye, Clock, CheckCircle, Users, Award, Plus } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  const userStats = {
    questionsAsked: 12,
    answersReceived: 8,
    articlesRead: 45,
    followingScholars: 6,
    reputation: 150,
  }

  const myQuestions = [
    {
      id: 1,
      title: "What is the ruling on cryptocurrency trading?",
      status: "answered",
      answers: 2,
      views: 156,
      createdAt: "2 days ago",
      category: "Fiqh",
    },
    {
      id: 2,
      title: "How to perform Tahajjud prayer correctly?",
      status: "pending",
      answers: 0,
      views: 23,
      createdAt: "1 day ago",
      category: "Worship",
    },
    {
      id: 3,
      title: "Is working in conventional bank permissible?",
      status: "answered",
      answers: 3,
      views: 289,
      createdAt: "1 week ago",
      category: "Business",
    },
  ]

  const savedContent = [
    {
      id: 1,
      type: "question",
      title: "Understanding the concept of Tawheed",
      author: "Dr. Yusuf Al-Qaradawi",
      savedAt: "3 days ago",
    },
    {
      id: 2,
      type: "article",
      title: "The Importance of Seeking Knowledge in Islam",
      author: "Sheikh Abdul Rahman",
      savedAt: "1 week ago",
    },
  ]

  const followedScholars = [
    {
      id: 1,
      name: "Dr. Yusuf Al-Qaradawi",
      speciality: "Fiqh & Contemporary Issues",
      avatar: "/placeholder-scholar.jpg",
      newArticles: 2,
    },
    {
      id: 2,
      name: "Sheikh Abdul Rahman",
      speciality: "Quran & Hadith",
      avatar: "/placeholder-scholar.jpg",
      newArticles: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Track your Islamic learning journey and manage your content</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{userStats.questionsAsked}</p>
                  <p className="text-sm text-gray-600">Questions Asked</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{userStats.answersReceived}</p>
                  <p className="text-sm text-gray-600">Answers Received</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{userStats.articlesRead}</p>
                  <p className="text-sm text-gray-600">Articles Read</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{userStats.followingScholars}</p>
                  <p className="text-sm text-gray-600">Following Scholars</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{userStats.reputation}</p>
                  <p className="text-sm text-gray-600">Reputation Points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="questions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="questions">My Questions</TabsTrigger>
            <TabsTrigger value="saved">Saved Content</TabsTrigger>
            <TabsTrigger value="scholars">Following</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="questions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">My Questions</h2>
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                <Link href="/ask">
                  <Plus className="w-4 h-4 mr-2" />
                  Ask New Question
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {myQuestions.map((question) => (
                <Card key={question.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{question.category}</Badge>
                          <Badge
                            variant={question.status === "answered" ? "default" : "outline"}
                            className={question.status === "answered" ? "bg-green-100 text-green-700" : ""}
                          >
                            {question.status === "answered" ? "Answered" : "Pending"}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-emerald-700 cursor-pointer">
                          {question.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{question.answers} answers</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{question.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{question.createdAt}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Saved Content</h2>

            <div className="space-y-4">
              {savedContent.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">
                            {item.type === "question" ? (
                              <MessageSquare className="w-3 h-3 mr-1" />
                            ) : (
                              <BookOpen className="w-3 h-3 mr-1" />
                            )}
                            {item.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-emerald-700 cursor-pointer">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>by {item.author}</span>
                          <span>•</span>
                          <span>Saved {item.savedAt}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholars" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Following Scholars</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {followedScholars.map((scholar) => (
                <Card key={scholar.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={scholar.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">
                          {scholar.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{scholar.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{scholar.speciality}</p>
                        {scholar.newArticles > 0 && (
                          <Badge className="bg-emerald-100 text-emerald-700">{scholar.newArticles} new articles</Badge>
                        )}
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <div>
                      <p className="font-medium">Your question was answered</p>
                      <p className="text-sm text-gray-600">
                        "What is the ruling on cryptocurrency trading?" - 2 hours ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">New article from followed scholar</p>
                      <p className="text-sm text-gray-600">
                        Dr. Yusuf Al-Qaradawi published "Modern Banking in Islam" - 1 day ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <Heart className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-medium">Your question received likes</p>
                      <p className="text-sm text-gray-600">
                        "How to perform Tahajjud prayer correctly?" received 5 likes - 3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
