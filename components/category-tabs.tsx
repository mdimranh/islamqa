"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const categories = [
  { id: "all", name: "All Topics", count: 1250, color: "bg-gray-100 text-gray-700" },
  { id: "aqeedah", name: "Aqeedah", count: 245, color: "bg-emerald-100 text-emerald-700" },
  { id: "fiqh", name: "Fiqh", count: 189, color: "bg-blue-100 text-blue-700" },
  { id: "hadith", name: "Hadith", count: 156, color: "bg-amber-100 text-amber-700" },
  { id: "quran", name: "Quran", count: 203, color: "bg-purple-100 text-purple-700" },
  { id: "seerah", name: "Seerah", count: 98, color: "bg-rose-100 text-rose-700" },
  { id: "dua", name: "Dua & Dhikr", count: 134, color: "bg-teal-100 text-teal-700" },
  { id: "marriage", name: "Marriage & Family", count: 167, color: "bg-pink-100 text-pink-700" },
  { id: "business", name: "Business & Finance", count: 89, color: "bg-orange-100 text-orange-700" },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="w-full">
      {/* <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Browse by Category</h2>
        <p className="text-gray-600">Explore Islamic knowledge organized by topics</p>
      </div> */}

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-3 pb-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center space-x-2 rounded-full px-4 py-2 transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg"
                  : "hover:bg-emerald-50 hover:border-emerald-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="whitespace-nowrap">{category.name}</span>
              <Badge
                variant="secondary"
                className={`${category.color} ${activeCategory === category.id ? "bg-white/20 text-white" : ""}`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
