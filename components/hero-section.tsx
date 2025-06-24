"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageSquare, BookOpen, Users } from "lucide-react"
import { Bismillah } from "@/components/bismillah"
import { IslamicPattern } from "@/components/islamic-patterns"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative p-4 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="search"
                  placeholder="Search your question..."
                  className="pl-4 pr-4 py-7 text-lg border-2 border-emerald-200 focus:border-emerald-500 rounded-xl shadow-lg bg-white/90 backdrop-blur-sm"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 hover:scale-105">
                  Search Question
                </Button>
              </div>
            </div> 
          </div>
        </div>
    </section>
  )
}
