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
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Islamic Background Pattern */}
      <IslamicPattern className="opacity-5" />

      {/* Animated Islamic Border */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 animate-pulse"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Bismillah */}
          {/* <Bismillah className="mb-8" /> */}

          {/* Main Heading with Animation */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Islamic Knowledge
              </span>
              <br />
              <span className="text-gray-800">Made Accessible</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with verified Islamic scholars, ask questions, and explore authentic Islamic knowledge backed by
              Quran and Hadith references.
            </p>
          </div>

          {/* Search Bar with Animation */}
          <div
            className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 transform ${
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

          {/* Stats with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: MessageSquare,
                count: "10,000+",
                label: "Questions Answered",
                color: "emerald",
                delay: "delay-500",
              },
              { icon: Users, count: "500+", label: "Verified Scholars", color: "amber", delay: "delay-700" },
              { icon: BookOpen, count: "5,000+", label: "Articles Published", color: "emerald", delay: "delay-900" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${stat.delay} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-${stat.color}-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.count}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Islamic Quote */}
          <div
            className={`mt-12 transition-all duration-1000 delay-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg max-w-2xl mx-auto">
              <div className="arabic-text text-lg text-emerald-800 mb-2">طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</div>
              <div className="text-emerald-700 italic">"Seeking knowledge is an obligation upon every Muslim"</div>
              <div className="text-sm text-emerald-600 mt-2">- Prophet Muhammad (ﷺ)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
