"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, Bookmark, Flag, CheckCircle, Clock, Eye } from "lucide-react"

export default function QuestionDetailPage() {
  const [isAnswering, setIsAnswering] = useState(false)
  const [answerContent, setAnswerContent] = useState("")
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null)

  // Mock question data
  const question = {
    id: 1,
    title: "What is the Islamic ruling on cryptocurrency trading and investments?",
    content: `Assalamu Alaikum,

I hope this message finds you in good health and faith. I have been researching cryptocurrency investments, particularly Bitcoin and Ethereum, and I'm uncertain about their permissibility in Islam.

My specific questions are:
1. Are cryptocurrencies considered a legitimate form of currency in Islamic finance?
2. Is trading cryptocurrencies similar to forex trading, which some scholars consider gambling?
3. What about long-term investment in established cryptocurrencies?
4. Are there any specific conditions that would make crypto trading halal?

I've heard different opinions from various sources, and I would appreciate guidance based on authentic Islamic sources and contemporary scholarly consensus.

JazakAllahu Khairan for your time and knowledge.`,
    author: {
      name: "Ahmad Rahman",
      avatar: "/placeholder-user.jpg",
      reputation: 150,
    },
    categories: ["Fiqh", "Business & Finance", "Contemporary Issues"],
    tags: ["cryptocurrency", "bitcoin", "halal", "trading", "investment"],
    createdAt: "2 days ago",
    views: 1250,
    votes: 45,
    isBookmarked: false,
    answers: [
      {
        id: 1,
        content: `<div class="space-y-4">
          <p>Wa alaikum assalam wa rahmatullahi wa barakatuh,</p>
          
          <p>This is an excellent question that many Muslims are asking in our digital age. The ruling on cryptocurrency requires careful analysis of several Islamic principles.</p>
          
          <div class="quran-reference bg-emerald-50 border-l-4 border-emerald-500 p-4 my-4 rounded-r-lg">
            <div class="arabic-text text-right text-xl mb-2 font-arabic">يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ إِلَّا أَن تَكُونَ تِجَارَةً عَن تَرَاضٍ مِّنكُمْ</div>
            <div class="translation text-gray-700 mb-2">O you who believe! Do not consume one another's wealth unjustly but only [in lawful] business by mutual consent.</div>
            <div class="reference text-sm text-emerald-700 font-medium">Quran 4:29</div>
          </div>
          
          <h3 class="text-lg font-semibold">Key Considerations:</h3>
          
          <ol class="list-decimal list-inside space-y-2">
            <li><strong>Currency vs Commodity:</strong> Most contemporary scholars view established cryptocurrencies like Bitcoin as digital assets rather than traditional currency.</li>
            <li><strong>Excessive Speculation (Gharar):</strong> The extreme volatility can constitute excessive uncertainty, which is prohibited.</li>
            <li><strong>Utility and Purpose:</strong> Cryptocurrencies with clear utility and backing by real assets are more likely to be permissible.</li>
          </ol>
          
          <div class="hadith-reference bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded-r-lg">
            <div class="hadith-text text-gray-800 mb-2">"The Prophet (ﷺ) forbade the sale of what is not with you."</div>
            <div class="hadith-details text-sm text-gray-600">
              <span class="font-medium">Narrator:</span> Hakim ibn Hizam | 
              <span class="font-medium">Source:</span> Abu Dawud 3503 | 
              <span class="font-medium">Grade:</span> Sahih
            </div>
          </div>
          
          <h3 class="text-lg font-semibold">Scholarly Consensus:</h3>
          
          <p>The majority of contemporary Islamic finance scholars suggest:</p>
          
          <ul class="list-disc list-inside space-y-1">
            <li>Long-term investment in established cryptocurrencies may be permissible</li>
            <li>Day trading and speculative trading should be avoided</li>
            <li>Ensure the cryptocurrency serves a legitimate purpose</li>
            <li>Avoid margin trading and interest-based lending</li>
          </ul>
          
          <p><strong>Recommendation:</strong> Consult with a qualified Islamic finance advisor for your specific situation, and consider investing only what you can afford to lose.</p>
          
          <p>Wallahu a'lam (Allah knows best).</p>
        </div>`,
        author: {
          name: "Dr. Yusuf Al-Qaradawi",
          avatar: "/placeholder-scholar.jpg",
          title: "Islamic Jurisprudence Scholar",
          isVerified: true,
          reputation: 2850,
        },
        createdAt: "1 day ago",
        votes: 89,
        isHelpful: true,
        comments: [
          {
            id: 1,
            content: "JazakAllahu khairan for this comprehensive answer. Very helpful!",
            author: "Fatima Ali",
            createdAt: "12 hours ago",
          },
        ],
      },
    ],
  }

  const handleVote = (type: "up" | "down") => {
    setUserVote(userVote === type ? null : type)
  }

  const handleSubmitAnswer = () => {
    // Submit answer logic
    console.log("Submitting answer:", answerContent)
    setIsAnswering(false)
    setAnswerContent("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Question */}
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    {question.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">{question.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={question.author.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gray-100">
                          {question.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{question.author.name}</span>
                      <Badge variant="outline">{question.author.reputation} rep</Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{question.createdAt}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{question.views} views</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="prose max-w-none mb-6">
                <div className="whitespace-pre-wrap text-gray-700">{question.content}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {question.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Voting */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={userVote === "up" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleVote("up")}
                    className={userVote === "up" ? "bg-emerald-600" : ""}
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {question.votes + (userVote === "up" ? 1 : 0)}
                  </Button>
                  <Button
                    variant={userVote === "down" ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => handleVote("down")}
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <MessageSquare className="w-4 h-4" />
                  <span>{question.answers.length} answers</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answers */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {question.answers.length} Answer{question.answers.length !== 1 ? "s" : ""}
              </h2>
              <Button onClick={() => setIsAnswering(true)} className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                Write Answer
              </Button>
            </div>

            {question.answers.map((answer) => (
              <Card key={answer.id} className="border-l-4 border-l-amber-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={answer.author.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700">
                          {answer.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-800">{answer.author.name}</h3>
                          {answer.author.isVerified && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                        </div>
                        <p className="text-sm text-gray-600">{answer.author.title}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Badge variant="outline">{answer.author.reputation} rep</Badge>
                          <span>•</span>
                          <span>{answer.createdAt}</span>
                        </div>
                      </div>
                    </div>

                    {answer.isHelpful && (
                      <Badge className="bg-green-100 text-green-700">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Helpful Answer
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: answer.content }} />

                  {/* Answer Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {answer.votes}
                        </Button>
                        <Button variant="outline" size="sm">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Comment
                      </Button>

                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                    </div>

                    <Button variant="ghost" size="sm">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Comments */}
                  {answer.comments && answer.comments.length > 0 && (
                    <div className="mt-6 pt-4 border-t">
                      <div className="space-y-3">
                        {answer.comments.map((comment) => (
                          <div key={comment.id} className="flex items-start space-x-3">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="text-xs bg-gray-100">
                                {comment.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm text-gray-700">{comment.content}</p>
                              <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                                <span>{comment.author}</span>
                                <span>•</span>
                                <span>{comment.createdAt}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Answer Form */}
          {isAnswering && (
            <Card>
              <CardHeader>
                <CardTitle>Your Answer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RichTextEditor
                  value={answerContent}
                  onChange={setAnswerContent}
                  placeholder="Provide a comprehensive answer with references from Quran and Hadith..."
                />

                <div className="flex items-center space-x-4">
                  <Button onClick={handleSubmitAnswer} className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                    Submit Answer
                  </Button>
                  <Button variant="outline" onClick={() => setIsAnswering(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
