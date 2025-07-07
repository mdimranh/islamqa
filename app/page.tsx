"use client"

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
import HomeSidebar from "@/components/sidebar/home"
import { Separator } from "@/components/ui/separator"
import ScholarsSide from "@/components/scholars/side"
import ReelsSlider from "@/components/slider"
import { ArticleCard } from "@/components/card/article"

export default function HomePage() {
  const reelsData = [
    {
      id: "1",
      title: "Create story",
      image: "scholar.jpg",
      isCreateStory: true,
    },
    {
      id: "2",
      title: "RealityCheck BD",
      image: "/api/placeholder/200/300",
      author: "RealityCheck BD",
    },
    {
      id: "3",
      title: "মেসবাম র্যাসেল উদ্দিন",
      image: "/api/placeholder/200/300",
      author: "Rassel Uddin",
    },
    {
      id: "4",
      title: "Naim Islam",
      image: "/api/placeholder/200/300",
      author: "Naim Islam",
    },
    {
      id: "5",
      title: "Ahaliya's Deen square",
      image: "/api/placeholder/200/300",
      author: "Ahaliya's Deen",
      isLive: true,
    },
    {
      id: "6",
      title: "Habibur Rahman Habib",
      image: "/api/placeholder/200/300",
      author: "Habibur Rahman",
    },
    {
      id: "7",
      title: "Another Story",
      image: "/api/placeholder/200/300",
      author: "User Name",
    },
    {
      id: "8",
      title: "More Content",
      image: "/api/placeholder/200/300",
      author: "Content Creator",
    },
    {
      id: "9",
      title: "Create story",
      image: "/api/placeholder/200/300",
      isCreateStory: true,
    },
    {
      id: "10",
      title: "RealityCheck BD",
      image: "/api/placeholder/200/300",
      author: "RealityCheck BD",
    },
    {
      id: "11",
      title: "মেসবাম র্যাসেল উদ্দিন",
      image: "/api/placeholder/200/300",
      author: "Rassel Uddin",
    },
    {
      id: "12",
      title: "Naim Islam",
      image: "/api/placeholder/200/300",
      author: "Naim Islam",
    },
    {
      id: "13",
      title: "Ahaliya's Deen square",
      image: "/api/placeholder/200/300",
      author: "Ahaliya's Deen",
      isLive: true,
    },
    {
      id: "14",
      title: "Habibur Rahman Habib",
      image: "/api/placeholder/200/300",
      author: "Habibur Rahman",
    },
    {
      id: "15",
      title: "Another Story",
      image: "/api/placeholder/200/300",
      author: "User Name",
    },
    {
      id: "16",
      title: "More Content",
      image: "/api/placeholder/200/300",
      author: "Content Creator",
    },
  ];

  const handleReelClick = (reel: any) => {
    console.log("Reel clicked:", reel);
    // Handle reel click - navigate to reel view, open modal, etc.
  };

  const handleCreateStoryClick = () => {
    console.log("Create story clicked");
    // Handle create story click - open story creation flow
  };
  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-between mt-16">
        <div className="max-w-80 w-full max-h-[calc(100vh-80px)] py-4 ml-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide sticky top-[65px]">
          {/* <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
            }
          >
            <TopScholars />
          </Suspense> */}
          <HomeSidebar />
          <Separator />
          <ScholarsSide />
        </div>

        <div className="container max-w-3xl pt-2 pb-4">
          {/* <HeroSection /> */}
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
            }
          >
            <ReelsSlider
              reels={reelsData}
              onReelClick={handleReelClick}
              onCreateStoryClick={handleCreateStoryClick}
            />
            {/* <CategoryTabs /> */}
            <ArticleCard
              article={{
                id: 1,
                title: "রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের স্ত্রীগণ",
                excerpt:
                  "নবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের স্ত্রীদের সংখ্যা কত? তাদের নাম কী কী? স্পষ্ট দলীলসহ জবাব চাই, যেখানে হাদীসের নম্বর, বইয়ের নাম ও পৃষ্ঠার নম্বর উল্লেখ থাকবে; যেহেতু বিষয়টি নিয়ে অনেক বিভ্রান্তি আছে। নবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের স্ত্রীদের সংখ্যা কত? তাদের নাম কী কী? স্পষ্ট দলীলসহ জবাব চাই, যেখানে হাদীসের নম্বর, বইয়ের নাম ও পৃষ্ঠার নম্বর উল্লেখ থাকবে; যেহেতু বিষয়টি নিয়ে অনেক বিভ্রান্তি আছে।",
                categories: ["Fiqh", "Business", "Finance", "Technology"],
                author: "Ahmad Rahman",
                images: [
                  "/placeholder.svg",
                  "/placeholder.svg",
                  "/placeholder.svg",
                  "/placeholder.svg",
                  "/placeholder.svg",
                  "/placeholder.svg",
                ],
                authorAvatar: "/scholar.jpg",
                scholar: "Dr. Yusuf Al-Qaradawi",
                scholarAvatar: "/scholar.jpg",
              }}
            />
            <FeaturedQuestions />
          </Suspense>
        </div>

        <div className="max-w-80 w-full max-h-[calc(100vh-65px)] py-4 mr-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide sticky top-[65px]">
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <PrayerTimes />
          </Suspense>
          {/* <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <DailyVerse />
          </Suspense> */}
          {/* <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <QiblaDirection />
          </Suspense> */}
          <Suspense
            fallback={
              <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            }
          >
            <IslamicCalendar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
