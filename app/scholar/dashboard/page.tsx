"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Eye, Clock, CheckCircle, TrendingUp, Award, Plus, Edit, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ScholarDashboard() {
  const scholarStats = {
    pendingQuestions: 8,
    answersGiven: 156,
    articlesPublished: 23,
    followers: 1250,
    totalViews: 45600,
    reputation: 2850,
  }

  const pendingQuestions = [
    {
      id: 1,
      title: "What is the Islamic ruling on cryptocurrency investments?",
      askedBy: "Ahmad Rahman",
      category: "Fiqh",
      priority: "high",
      askedAt: "2 hours ago",
      views: 45,
    },
    {
      id: 2,
      title: "How should a Muslim approach modern banking systems?",
      askedBy: "Fatima Ali",
      category: "Business & Finance",
      priority: "medium",
      askedAt: "5 hours ago",
      views: 23,
    },
    {
      id: 3,
      title: "Is it permissible to work in a company that sells alcohol?",
      askedBy: "Omar Hassan",
      category: "Ethics",
      priority: "high",
      askedAt: "1 day ago",
      views: 67,
    },
  ]

  const myArticles = [
    {
      id: 1,
      title: "Understanding Modern Islamic Finance",
      status: "published",
      views: 1250,
      likes: 89,
      publishedAt: "3 days ago",
      category: "Finance",
    },
    {
      id: 2,
      title: "The Ethics of Business in Islam",
      status: "draft",
      views: 0,
      likes: 0,
      publishedAt: null,
      category: "Business",
    },
  ]

  const recentAnswers = [
    {
      id: 1,
      questionTitle: "What is the ruling on cryptocurrency trading?",
      answeredAt: "1 day ago",
      views: 234,
      helpful: 12,
    },
    {
      id: 2,
      questionTitle: "How to perform Wudu correctly?",
      answeredAt: "2 days ago",
      views: 456,
      helpful: 28,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Scholar Dashboard</h1>
          <p className="text-gray-600">Manage your Islamic knowledge sharing and help the community</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{scholarStats.pendingQuestions}</p>
                  <p className="text-sm text-gray-600">Pending Questions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{scholarStats.answersGiven}</p>
                  <p className="text-sm text-gray-600">Answers Given</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{scholarStats.articlesPublished}</p>
                  <p className="text-sm text-gray-600">Articles Published</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{scholarStats.followers}</p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Eye className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{scholarStats.totalViews.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Views</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{scholarStats.reputation}</p>
                  <p className="text-sm text-gray-600">Reputation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pending">Pending Questions</TabsTrigger>
            <TabsTrigger value="articles">My Articles</TabsTrigger>
            <TabsTrigger value="answers">Recent Answers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Pending Questions</h2>
              <Badge variant="destructive" className="text-sm">
                {scholarStats.pendingQuestions} questions waiting
              </Badge>
            </div>

            <div className="space-y-4">
              {pendingQuestions.map((question) => (
                <Card key={question.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{question.category}</Badge>
                          <Badge variant={question.priority === "high" ? "destructive" : "outline"}>
                            {question.priority} priority
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-emerald-700 cursor-pointer">
                          {question.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Asked by {question.askedBy}</span>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{question.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{question.askedAt}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700">Answer Question</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">My Articles</h2>
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                <Link href="/scholar/write-article">
                  <Plus className="w-4 h-4 mr-2" />
                  Write New Article
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {myArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <Badge
                            variant={article.status === "published" ? "default" : "outline"}
                            className={article.status === "published" ? "bg-green-100 text-green-700" : ""}
                          >
                            {article.status}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-emerald-700 cursor-pointer">
                          {article.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{article.likes} likes</span>
                          </div>
                          {article.publishedAt && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.publishedAt}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="answers" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Answers</h2>

            <div className="space-y-4">
              {recentAnswers.map((answer) => (
                <Card key={answer.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-emerald-700 cursor-pointer">
                          {answer.questionTitle}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{answer.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{answer.helpful} found helpful</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Answered {answer.answeredAt}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Answer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Analytics & Performance</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Your activity over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Questions Answered</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Articles Published</span>
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total Views</span>
                      <span className="font-bold">2,340</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>New Followers</span>
                      <span className="font-bold">45</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Categories</CardTitle>
                  <CardDescription>Your most active topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Fiqh</span>
                      <Badge>45 answers</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business & Finance</span>
                      <Badge>32 answers</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Worship</span>
                      <Badge>28 answers</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ethics</span>
                      <Badge>21 answers</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
