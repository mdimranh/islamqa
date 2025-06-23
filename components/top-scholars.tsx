import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, MessageSquare, BookOpen } from "lucide-react"

const topScholars = [
  {
    id: 1,
    name: "Dr. Yusuf Al-Qaradawi",
    title: "Islamic Jurisprudence Scholar",
    avatar: "/placeholder-scholar.jpg",
    specialties: ["Fiqh", "Contemporary Issues", "Fatwa"],
    followers: 15420,
    answers: 1250,
    articles: 89,
    isVerified: true,
    bio: "Renowned Islamic scholar specializing in contemporary Islamic jurisprudence and modern-day applications of Islamic law.",
  },
  {
    id: 2,
    name: "Sheikh Abdul Rahman",
    title: "Quran & Hadith Expert",
    avatar: "/placeholder-scholar.jpg",
    specialties: ["Quran", "Hadith", "Tafsir"],
    followers: 12890,
    answers: 980,
    articles: 156,
    isVerified: true,
    bio: "Expert in Quranic studies and Hadith sciences with over 20 years of teaching experience.",
  },
  {
    id: 3,
    name: "Dr. Aisha Muhammad",
    title: "Islamic Education Specialist",
    avatar: "/placeholder-scholar.jpg",
    specialties: ["Education", "Women's Issues", "Family"],
    followers: 9650,
    answers: 756,
    articles: 203,
    isVerified: true,
    bio: "Specialist in Islamic education and women's rights in Islam, with focus on family guidance.",
  },
  {
    id: 4,
    name: "Sheikh Omar Al-Farisi",
    title: "Aqeedah & Theology Scholar",
    avatar: "/placeholder-scholar.jpg",
    specialties: ["Aqeedah", "Theology", "Comparative Religion"],
    followers: 8340,
    answers: 634,
    articles: 127,
    isVerified: true,
    bio: "Scholar of Islamic theology and comparative religion studies with expertise in interfaith dialogue.",
  },
]

export function TopScholars() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Top Scholars</h2>
        <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {topScholars.map((scholar) => (
          <Card key={scholar.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-4">
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
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-800">{scholar.name}</h3>
                    {scholar.isVerified && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{scholar.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{scholar.bio}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                {/* Specialties */}
                <div className="flex flex-wrap gap-1">
                  {scholar.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{scholar.followers.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm font-medium">{scholar.answers}</span>
                    </div>
                    <div className="text-xs text-gray-500">Answers</div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-medium">{scholar.articles}</span>
                    </div>
                    <div className="text-xs text-gray-500">Articles</div>
                  </div>
                </div>

                {/* Follow Button */}
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                  Follow Scholar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
