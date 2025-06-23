"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

interface PrayerTime {
  name: string
  time: string
  arabic: string
  isNext: boolean
  isPassed: boolean
}

export function PrayerTimes() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [location] = useState("New York, NY") // In real app, get from user location

  // Mock prayer times - in real app, calculate based on location
  const prayerTimes: PrayerTime[] = [
    { name: "Fajr", time: "05:30", arabic: "الفجر", isNext: false, isPassed: true },
    { name: "Dhuhr", time: "12:45", arabic: "الظهر", isNext: false, isPassed: true },
    { name: "Asr", time: "15:30", arabic: "العصر", isNext: true, isPassed: false },
    { name: "Maghrib", time: "18:15", arabic: "المغرب", isNext: false, isPassed: false },
    { name: "Isha", time: "19:45", arabic: "العشاء", isNext: false, isPassed: false },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const nextPrayer = prayerTimes.find((prayer) => prayer.isNext)

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-emerald-800">
          <Clock className="w-5 h-5" />
          <span>Prayer Times</span>
        </CardTitle>
        <div className="flex items-center space-x-1 text-sm text-emerald-600">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {nextPrayer && (
          <div className="bg-emerald-600 text-white p-3 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Next Prayer</div>
                <div className="text-emerald-100 text-sm">
                  {nextPrayer.name} - {nextPrayer.time}
                </div>
              </div>
              <div className="arabic-text text-xl">{nextPrayer.arabic}</div>
            </div>
          </div>
        )}

        <div className="space-y-2">
          {prayerTimes.map((prayer) => (
            <div
              key={prayer.name}
              className={`flex items-center justify-between p-2 rounded-lg transition-all ${
                prayer.isNext
                  ? "bg-emerald-200 border border-emerald-300"
                  : prayer.isPassed
                    ? "bg-gray-100 text-gray-500"
                    : "bg-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="arabic-text text-lg text-emerald-700">{prayer.arabic}</div>
                <div>
                  <div className="font-medium">{prayer.name}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-mono">{prayer.time}</span>
                {prayer.isNext && <Badge className="bg-emerald-600">Next</Badge>}
                {prayer.isPassed && <Badge variant="secondary">Passed</Badge>}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-emerald-600 mt-4">
          Current time: {currentTime.toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  )
}
