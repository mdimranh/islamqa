"use client"

import { useState, useEffect } from "react"

export function Bismillah({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`text-center py-6 ${className}`}>
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="arabic-text text-2xl md:text-3xl text-emerald-700 mb-2 font-bold">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <div className="text-sm text-gray-600 italic">In the name of Allah, the Most Gracious, the Most Merciful</div>
      </div>
    </div>
  )
}

export function BismillahDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-300"></div>
        <div className="arabic-text text-emerald-600 text-lg">﷽</div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-300"></div>
      </div>
    </div>
  )
}
