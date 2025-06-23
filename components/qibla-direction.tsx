"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, MapPin, Navigation } from "lucide-react"

export function QiblaDirection() {
  const [qiblaDirection, setQiblaDirection] = useState<number>(0)
  const [userLocation, setUserLocation] = useState<string>("Getting location...")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock getting user location and calculating Qibla direction
    // In real app, use geolocation API and calculate actual Qibla direction
    setTimeout(() => {
      setUserLocation("New York, NY")
      setQiblaDirection(58) // Mock direction in degrees
      setIsLoading(false)
    }, 1000)
  }, [])

  const getLocationAndCalculateQibla = () => {
    setIsLoading(true)
    // In real app, request geolocation permission and calculate
    setTimeout(() => {
      setQiblaDirection(Math.floor(Math.random() * 360))
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-emerald-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-emerald-800">
          <Compass className="w-5 h-5" />
          <span>Qibla Direction</span>
        </CardTitle>
        <div className="flex items-center space-x-1 text-sm text-emerald-600">
          <MapPin className="w-4 h-4" />
          <span>{userLocation}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Compass */}
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-300 bg-white shadow-lg">
              {/* Compass markings */}
              <div className="absolute inset-2 rounded-full border border-emerald-200">
                {/* North marker */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-xs font-bold text-emerald-700">
                  N
                </div>
                {/* East marker */}
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 text-xs font-bold text-emerald-700">
                  E
                </div>
                {/* South marker */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 text-xs font-bold text-emerald-700">
                  S
                </div>
                {/* West marker */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 text-xs font-bold text-emerald-700">
                  W
                </div>
              </div>

              {/* Qibla direction arrow */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
                style={{ transform: `rotate(${qiblaDirection}deg)` }}
              >
                <div className="w-1 h-12 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full -mt-1 -ml-1 shadow-lg"></div>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-emerald-800">{isLoading ? "..." : `${qiblaDirection}°`}</div>
            <div className="text-sm text-emerald-600">Direction to Mecca</div>
            <div className="arabic-text text-lg text-emerald-700">القبلة</div>
          </div>

          <Button
            onClick={getLocationAndCalculateQibla}
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            size="sm"
          >
            <Navigation className="w-4 h-4 mr-2" />
            {isLoading ? "Calculating..." : "Update Location"}
          </Button>
        </div>

        <div className="text-xs text-center text-emerald-600 bg-emerald-50 p-2 rounded">
          💡 Tip: Hold your device flat and point the green arrow towards Mecca for prayer
        </div>
      </CardContent>
    </Card>
  )
}
