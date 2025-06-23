import { Suspense } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedQuestions } from "@/components/featured-questions"
import { TrendingArticles } from "@/components/trending-articles"
import { TopScholars } from "@/components/top-scholars"
import { CategoryTabs } from "@/components/category-tabs"
import { Footer } from "@/components/footer"
import { PrayerTimes } from "@/components/prayer-times"
import { DailyVerse } from "@/components/daily-verse"
import { QiblaDirection } from "@/components/qibla-direction"
import { IslamicCalendar } from "@/components/islamic-calendar"
import { BismillahDivider } from "@/components/bismillah"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Header />
      <main>
        <HeroSection />

        <BismillahDivider />

        <div className="container mx-auto px-4 py-12 space-y-16">
          <CategoryTabs />

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>}>
                <FeaturedQuestions />
              </Suspense>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>}>
                <TrendingArticles />
              </Suspense>
            </div>

            <div className="space-y-6">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>}>
                <PrayerTimes />
              </Suspense>

              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>}>
                <DailyVerse />
              </Suspense>

              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>}>
                <QiblaDirection />
              </Suspense>

              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>}>
                <IslamicCalendar />
              </Suspense>

              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>}>
                <TopScholars />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
