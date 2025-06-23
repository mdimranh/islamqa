"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  MessageSquare,
  BookOpen,
  Shield,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  XCircle,
  Eye,
  Clock,
} from "lucide-react"

export default function AdminDashboard() {
  const adminStats = {
    totalUsers: 12450,
    totalScholars: 156,
    pendingScholars: 8,
    totalQuestions: 8920,
    pendingQuestions: 23,
    reportedContent: 5,
    totalArticles: 2340,
    monthlyGrowth: 12.5,
  }

  const pendingScholars = [
    {
      id: 1,
      name: "Dr. Abdullah Al-Mansouri",
      email: "abdullah@example.com",
      specialization: "Islamic Jurisprudence",
      experience: "15 years",
      institution: "Al-Azhar University",
      appliedAt: "2 days ago",
      documents: ["CV", "Certificates", "Recommendation Letters"],
    },
    {
      id: 2,
      name: "Sheikh Fatima Al-Zahra",
      email: "fatima@example.com",
      specialization: "Quranic Studies",
      experience: "12 years",
      institution: "Islamic University of Medina",
      appliedAt: "1 week ago",
      documents: ["CV", "PhD Certificate", "Publications"],
    },
  ]

  const reportedContent = [
    {
      id: 1,
      type: "question",
      title: "Inappropriate question about Islamic practices",
      reportedBy: "Ahmad Rahman",
      reason: "Inappropriate content",
      reportedAt: "1 hour ago",
      status: "pending",
    },
    {
      id: 2,
      type: "answer",
      title: "Answer contains misleading information",
      reportedBy: "Fatima Ali",
      reason: "Misinformation",
      reportedAt: "3 hours ago",
      status: "pending",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      action: "New scholar application",
      user: "Dr. Abdullah Al-Mansouri",
      timestamp: "2 hours ago",
      type: "scholar_application",
    },
    {
      id: 2,
      action: "Content reported",
      user: "Ahmad Rahman",
      timestamp: "4 hours ago",
      type: "content_report",
    },
    {
      id: 3,
      action: "New user registration",
      user: "Omar Hassan",
      timestamp: "6 hours ago",
      type: "user_registration",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage the Islamic Q&A platform and moderate content</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{adminStats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{adminStats.totalScholars}</p>
                  <p className="text-sm text-gray-600">Verified Scholars</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{adminStats.totalQuestions.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Questions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-800">{adminStats.totalArticles.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Published Articles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="text-lg font-bold text-gray-800">{adminStats.reportedContent}</p>
                    <p className="text-sm text-gray-600">Reported Content</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <div>
                    <p className="text-lg font-bold text-gray-800">{adminStats.pendingScholars}</p>
                    <p className="text-sm text-gray-600">Pending Scholar Applications</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-lg font-bold text-gray-800">+{adminStats.monthlyGrowth}%</p>
                    <p className="text-sm text-gray-600">Monthly Growth</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="scholars" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="scholars">Scholar Applications</TabsTrigger>
            <TabsTrigger value="reports">Reported Content</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="scholars" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Pending Scholar Applications</h2>
              <Badge variant="destructive" className="text-sm">
                {adminStats.pendingScholars} applications pending
              </Badge>
            </div>

            <div className="space-y-4">
              {pendingScholars.map((scholar) => (
                <Card key={scholar.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar className="w-16 h-16">
                            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">
                              {scholar.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{scholar.name}</h3>
                            <p className="text-gray-600">{scholar.email}</p>
                            <Badge variant="secondary">{scholar.specialization}</Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Experience:</span> {scholar.experience}
                          </div>
                          <div>
                            <span className="font-medium">Institution:</span> {scholar.institution}
                          </div>
                          <div>
                            <span className="font-medium">Applied:</span> {scholar.appliedAt}
                          </div>
                          <div>
                            <span className="font-medium">Documents:</span> {scholar.documents.join(", ")}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm">
                          <XCircle className="w-4 h-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Reported Content</h2>
              <Badge variant="destructive" className="text-sm">
                {adminStats.reportedContent} reports pending
              </Badge>
            </div>

            <div className="space-y-4">
              {reportedContent.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">
                            {report.type === "question" ? (
                              <MessageSquare className="w-3 h-3 mr-1" />
                            ) : (
                              <BookOpen className="w-3 h-3 mr-1" />
                            )}
                            {report.type}
                          </Badge>
                          <Badge variant="destructive">{report.reason}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{report.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Reported by {report.reportedBy}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{report.reportedAt}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Dismiss
                        </Button>
                        <Button variant="destructive" size="sm">
                          Remove Content
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">User Management</h2>

            <Card>
              <CardHeader>
                <CardTitle>User Statistics</CardTitle>
                <CardDescription>Overview of platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">12,450</p>
                    <p className="text-sm text-gray-600">Total Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">156</p>
                    <p className="text-sm text-gray-600">Verified Scholars</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-600">8</p>
                    <p className="text-sm text-gray-600">Pending Scholars</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">245</p>
                    <p className="text-sm text-gray-600">New This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Content Management</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Questions & Answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Questions</span>
                      <span className="font-bold">8,920</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Answered Questions</span>
                      <span className="font-bold">7,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending Questions</span>
                      <span className="font-bold text-amber-600">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Reported Questions</span>
                      <span className="font-bold text-red-600">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Articles & Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Published Articles</span>
                      <span className="font-bold">2,340</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Draft Articles</span>
                      <span className="font-bold">45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending Review</span>
                      <span className="font-bold text-amber-600">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Reported Articles</span>
                      <span className="font-bold text-red-600">2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Platform Analytics</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Metrics</CardTitle>
                  <CardDescription>Platform growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Active Users</span>
                      <span className="font-bold text-green-600">+12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>New Questions</span>
                      <span className="font-bold text-green-600">+8.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Scholar Engagement</span>
                      <span className="font-bold text-green-600">+15.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Article Views</span>
                      <span className="font-bold text-green-600">+22.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Categories</CardTitle>
                  <CardDescription>Most active discussion topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Fiqh</span>
                      <Badge>2,340 questions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Worship & Prayer</span>
                      <Badge>1,890 questions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business & Finance</span>
                      <Badge>1,456 questions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Marriage & Family</span>
                      <Badge>1,234 questions</Badge>
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
