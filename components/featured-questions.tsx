import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, Clock, CheckCircle, LucidePrinter } from "lucide-react"
import { RiQuestionnaireFill } from "react-icons/ri"
import { FaQuestion, FaRegBookmark } from "react-icons/fa"
import { MdOutlineShare, MdQuestionAnswer } from "react-icons/md"
import { PiSealQuestionFill } from "react-icons/pi"
import { BiSolidMessageSquareCheck } from "react-icons/bi";

const featuredQuestions = [
  {
    id: 1,
    title:
      "রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের স্ত্রীগণ",
    excerpt:
      "নবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের স্ত্রীদের সংখ্যা কত? তাদের নাম কী কী? স্পষ্ট দলীলসহ জবাব চাই, যেখানে হাদীসের নম্বর, বইয়ের নাম ও পৃষ্ঠার নম্বর উল্লেখ থাকবে; যেহেতু বিষয়টি নিয়ে অনেক বিভ্রান্তি আছে।",
    categories: ["Fiqh", "Business", "Finance", "Technology"],
    author: "Ahmad Rahman",
    authorAvatar: "/scholar.jpg",
    scholar: "Dr. Yusuf Al-Qaradawi",
    scholarAvatar: "/scholar.jpg",
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
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
];

export function FeaturedQuestions() {
  return (
    <section>
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Questions</h2>
        <Button
          variant="outline"
          className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
        >
          View All Questions
        </Button>
      </div> */}

      <div className="space-y-4 mt-3">
        {featuredQuestions.map((question) => (
          <Card
            key={question.id}
            className="hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            <div className="flex flex-col justify-start">
              <div className="w-full">
                <FaQuestion
                  className="absolute -top-3 -right-8 text-slate-300 opacity-25 z-0"
                  size={150}
                />
                <CardHeader className="p-4 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex justify-start items-start gap-2 w-full">
                        <div>
                          <RiQuestionnaireFill
                            size={25}
                            className="text-emerald-800 mt-0.5"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 hover:text-emerald-700">
                          {question.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mt-2">{question.excerpt}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-4 pt-0">
                  <div className="flex items-end justify-between">
                    <div className="cursor-pointer group">
                      {question.isAnswered && question.scholar && (
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 rounded border">
                            <AvatarImage
                              className="object-cover"
                              src={question.scholarAvatar || "/placeholder.svg"}
                            />
                            <AvatarFallback className="text-xs text-emerald-700 rounded">
                              {question.scholar
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm flex gap-2 items-center group-hover:text-emerald-700">
                              {question.scholar}{" "}
                              <BiSolidMessageSquareCheck className="w-4 h-4 text-emerald-600" />
                            </span>
                            <span className="text-xs text-gray-500">
                              30m Ago • 450 Reads
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-row-reverse items-center gap-2 text-sm text-slate-500">
                      {question.categories.map(
                        (category, index) =>
                          index < 2 && (
                            <Badge
                              key={category}
                              variant="outline"
                              className="text-xs bg-slate-100 cursor-pointer hover:bg-slate-200"
                            >
                              {category}
                            </Badge>
                          )
                      )}
                      {question.categories.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-slate-100"
                        >
                          +{question.categories.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="flex justify-between gap-5 px-4 py-4 border-t z-10">
                <FaRegBookmark className="w-5 h-5 text-slate-500 cursor-pointer" />
                <MdOutlineShare className="w-5 h-5 text-slate-500 cursor-pointer" />
                <LucidePrinter className="w-5 h-5 text-slate-500 cursor-pointer" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
