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
import { ScrollArea } from "@radix-ui/react-scroll-area"

export default function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-br">
      <Header />

      <div className="flex justify-between">
        <div className="max-w-80 w-full max-h-[calc(100vh-100px)] py-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide sticky top-[65px]">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <PrayerTimes />
          </Suspense>
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <DailyVerse />
          </Suspense>
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <QiblaDirection />
          </Suspense>
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <IslamicCalendar />
          </Suspense>
        </div>

        <div className="container max-w-4xl">
          <HeroSection />
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
            }
          >
            <CategoryTabs />
            <FeaturedQuestions />
          </Suspense>
        </div>

        <div className="max-w-80 w-full max-h-[calc(100vh-100px)] py-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide sticky top-[65px]">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
            }
          >
            <TopScholars />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
