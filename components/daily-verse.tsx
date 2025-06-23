"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, RefreshCw, Share2, Heart } from "lucide-react"

interface Verse {
  arabic: string
  translation: string
  reference: string
  surah: string
  ayah: number
}

export function DailyVerse() {
  const [verse, setVerse] = useState<Verse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  // Mock verses - in real app, fetch from API
  const verses: Verse[] = [
    {
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      translation: "And whoever fears Allah - He will make for him a way out.",
      reference: "65:2",
      surah: "At-Talaq",
      ayah: 2,
    },
    {
      arabic: "وَاللَّهُ غَالِبٌ عَلَىٰ أَمْرِهِ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ",
      translation: "And Allah is predominant over His affair, but most of the people do not know.",
      reference: "12:21",
      surah: "Yusuf",
      ayah: 21,
    },
    {
      arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "For indeed, with hardship [will be] ease.",
      reference: "94:5",
      surah: "Ash-Sharh",
      ayah: 5,
    },
  ]

  useEffect(() => {
    // Load today's verse
    const today = new Date().getDate()
    const todayVerse = verses[today % verses.length]
    setVerse(todayVerse)
  }, [])

  const refreshVerse = () => {
    setIsLoading(true)
    setTimeout(() => {
      const randomVerse = verses[Math.floor(Math.random() * verses.length)]
      setVerse(randomVerse)
      setIsLoading(false)
    }, 500)
  }

  if (!verse) return null

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-amber-800">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Verse of the Day</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={refreshVerse}
            disabled={isLoading}
            className="text-amber-700 hover:bg-amber-200"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-4">
          <div className="arabic-text text-xl md:text-2xl text-amber-800 leading-relaxed font-bold">{verse.arabic}</div>

          <div className="text-gray-700 italic leading-relaxed">"{verse.translation}"</div>

          <div className="text-sm text-amber-700 font-medium">
            Quran {verse.reference} - {verse.surah}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 pt-4 border-t border-amber-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className={`text-amber-700 hover:bg-amber-200 ${isLiked ? "text-red-600" : ""}`}
          >
            <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
            {isLiked ? "Liked" : "Like"}
          </Button>

          <Button variant="ghost" size="sm" className="text-amber-700 hover:bg-amber-200">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
