"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Moon } from "lucide-react"

interface IslamicDate {
  hijriDay: number
  hijriMonth: string
  hijriYear: number
  gregorianDate: string
  specialDay?: string
  isImportant?: boolean
}

export function IslamicCalendar() {
  const [islamicDate, setIslamicDate] = useState<IslamicDate | null>(null)
  const [upcomingEvents, setUpcomingEvents] = useState<
    Array<{
      name: string
      date: string
      daysLeft: number
      type: "religious" | "important"
    }>
  >([])

  useEffect(() => {
    // Mock Islamic date calculation - in real app, use proper Hijri calendar library
    const today = new Date()
    setIslamicDate({
      hijriDay: 15,
      hijriMonth: "Rajab",
      hijriYear: 1445,
      gregorianDate: today.toLocaleDateString(),
      specialDay: "Laylat al-Miraj",
      isImportant: true,
    })

    // Mock upcoming events
    setUpcomingEvents([
      { name: "Laylat al-Qadr", date: "Ramadan 27", daysLeft: 45, type: "religious" },
      { name: "Eid al-Fitr", date: "Shawwal 1", daysLeft: 48, type: "important" },
      { name: "Day of Arafah", date: "Dhul Hijjah 9", daysLeft: 120, type: "religious" },
      { name: "Eid al-Adha", date: "Dhul Hijjah 10", daysLeft: 121, type: "important" },
    ])
  }, [])

  if (!islamicDate) return null

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-purple-800">
          <Calendar className="w-5 h-5" />
          <span>Islamic Calendar</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Islamic Date */}
        <div className="text-center space-y-2 p-4 bg-white rounded-lg border border-purple-200">
          <div className="flex items-center justify-center space-x-2">
            <Moon className="w-5 h-5 text-purple-600" />
            <div className="text-lg font-bold text-purple-800">
              {islamicDate.hijriDay} {islamicDate.hijriMonth} {islamicDate.hijriYear} AH
            </div>
          </div>
          <div className="text-sm text-gray-600">{islamicDate.gregorianDate}</div>
          {islamicDate.specialDay && (
            <Badge className={`${islamicDate.isImportant ? "bg-purple-600" : "bg-purple-100 text-purple-700"}`}>
              <Star className="w-3 h-3 mr-1" />
              {islamicDate.specialDay}
            </Badge>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="space-y-3">
          <h4 className="font-semibold text-purple-800 text-sm">Upcoming Events</h4>
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200"
            >
              <div>
                <div className="font-medium text-gray-800">{event.name}</div>
                <div className="text-sm text-gray-600">{event.date}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-purple-700">{event.daysLeft} days</div>
                <Badge
                  variant={event.type === "religious" ? "default" : "secondary"}
                  className={event.type === "religious" ? "bg-purple-600" : ""}
                >
                  {event.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-center text-purple-600 bg-purple-50 p-2 rounded">
          🌙 Islamic dates may vary by location and moon sighting
        </div>
      </CardContent>
    </Card>
  )
}
