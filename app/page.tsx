"use client"

import { ArticleCard } from "@/components/card/article"
import { FeaturedQuestions } from "@/components/featured-questions"
import { Header } from "@/components/header"
import { IslamicCalendar } from "@/components/islamic-calendar"
import { PrayerTimes } from "@/components/prayer-times"
import ScholarsSide from "@/components/scholars/side"
import HomeSidebar from "@/components/sidebar/home"
import ReelsSlider from "@/components/slider"
import { Separator } from "@/components/ui/separator"
import { Suspense } from "react"

export default function HomePage() {
  const reelsData = [
    {
      id: "1",
      title: "Create story",
      image: "/tree/1.jpg",
      isCreateStory: true,
    },
    {
      id: "2",
      title: "RealityCheck BD",
      image: "/tree/2.jpg",
      author: "RealityCheck BD",
    },
    {
      id: "3",
      title: "মেসবাম র্যাসেল উদ্দিন",
      image: "/tree/3.jpg",
      author: "Rassel Uddin",
    },
    {
      id: "4",
      title: "Naim Islam",
      image: "/tree/4.jpg",
      author: "Naim Islam",
    },
    {
      id: "5",
      title: "Ahaliya's Deen square",
      image: "/tree/5.jpg",
      author: "Ahaliya's Deen",
      isLive: true,
    },
    {
      id: "6",
      title: "Habibur Rahman Habib",
      image: "/tree/6.jpg",
      author: "Habibur Rahman",
    },
    {
      id: "7",
      title: "Another Story",
      image: "/tree/7.jpg",
      author: "User Name",
    },
    {
      id: "8",
      title: "More Content",
      image: "/tree/1.jpg",
      author: "Content Creator",
    },
    {
      id: "9",
      title: "Create story",
      image: "/tree/2.jpg",
      isCreateStory: true,
    },
    {
      id: "10",
      title: "RealityCheck BD",
      image: "/tree/3.jpg",
      author: "RealityCheck BD",
    },
    {
      id: "11",
      title: "মেসবাম র্যাসেল উদ্দিন",
      image: "/tree/4.jpg",
      author: "Rassel Uddin",
    },
    {
      id: "12",
      title: "Naim Islam",
      image: "/tree/5.jpg",
      author: "Naim Islam",
    },
    {
      id: "13",
      title: "Ahaliya's Deen square",
      image: "/tree/6.jpg",
      author: "Ahaliya's Deen",
      isLive: true,
    },
    {
      id: "14",
      title: "Habibur Rahman Habib",
      image: "/tree/7.jpg",
      author: "Habibur Rahman",
    },
    {
      id: "15",
      title: "Another Story",
      image: "/tree/1.jpg",
      author: "User Name",
    },
    {
      id: "16",
      title: "More Content",
      image: "/tree/2.jpg",
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
                  `
এই ইট-পাথরের শহরে বসত করে চাইলেও মনের মতো ফলের বাগান করা সম্ভব হয় না। কিন্তু সামান্য কিছু অর্থের মাধ্যমে গ্রামে বসবাসরত দরিদ্র কোনো বৃক্ষপ্রেমীকে আপনি একটি ফলের বাগান উপহার দিতে পারেন।

এতে একদিকে আপনি যেমন আত্মপ্রশান্তি ও সদকায়ে জারিয়ার সওয়াব লাভ করবেন, পাশাপাশি অভাবী জনগোষ্ঠীর স্বনির্ভরকরণ ও পরিবেশ সুরক্ষায়ও গুরুত্বপূর্ণ অবদান থাকবে আপনার।

তাই, এই বর্ষায় আপনি হতে পারেন এক বা একাধিক ফলের বাগানের উপহারদাতা। আপনার বাগানে থাকবে আম, লিচু, লেবু, পেয়ারা, আমড়া-সহ হরেক রকম ফলের গাছ।
🔸 ২০ টি ফলদ গাছের একটি বাগান ২ হাজার টাকা।
🔸 ৫০ টি ফলদ গাছের একটি বাগান ৫ হাজার টাকা।
🔸 ১০০ টি ফলদ গাছের একটি বাগান ১০ হাজার টাকা।
🔸 ১ টি ফলদ গাছ ১০০ টাকা।

চাইলে যে কোনো পরিমাণ অর্থও ডোনেশন করতে পারবেন।
বাগান ছাড়াও বিভিন্ন মসজিদ ও শিক্ষা প্রতিষ্ঠানের আঙিনায় বৃক্ষরোপণ করা হবে।`,
                categories: ["Fiqh", "Business", "Finance", "Technology"],
                author: "Ahmad Rahman",
                images: [
                  "/tree/1.jpg",
                  "/tree/2.jpg",
                  "/tree/tree.mp4",
                  "/tree/3.jpg",
                  "/tree/4.jpg",
                  "/tree/5.jpg",
                  "/tree/6.jpg",
                  "/tree/7.jpg"
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
