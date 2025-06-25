"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ReelItem {
  id: string;
  title: string;
  image: string;
  isCreateStory?: boolean;
  isLive?: boolean;
  author?: string;
}

interface ReelsSliderProps {
  reels: ReelItem[];
  onReelClick?: (reel: ReelItem) => void;
  onCreateStoryClick?: () => void;
}

const ReelsSlider: React.FC<ReelsSliderProps> = ({
  reels,
  onReelClick,
  onCreateStoryClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleReelClick = (reel: ReelItem) => {
    if (reel.isCreateStory && onCreateStoryClick) {
      onCreateStoryClick();
    } else if (onReelClick) {
      onReelClick(reel);
    }
  };

  return (
    <div className="relative w-full">
      {/* Left scroll button */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0 bg-white shadow-md hover:bg-gray-50"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-10 py-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reels.map((reel) => (
          <Card
            key={reel.id}
            className="relative flex-shrink-0 w-32 h-48 cursor-pointer overflow-hidden hover:opacity-90 transition-opacity"
            onClick={() => handleReelClick(reel)}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${reel.image})` }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Create story special styling */}
            {reel.isCreateStory && (
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </div>
            )}

            {/* Live indicator */}
            {reel.isLive && (
              <div className="absolute top-2 right-2">
                <div className="bg-red-600 text-white text-xs px-1 py-0.5 rounded flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  LIVE
                </div>
              </div>
            )}

            {/* Title */}
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white text-xs font-medium leading-tight line-clamp-3">
                {reel.title}
              </p>
              {reel.author && (
                <p className="text-white/80 text-xs mt-1">{reel.author}</p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Right scroll button */}
      <Button
        variant="outline"
        size="sm"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 p-0 bg-white shadow-md hover:bg-gray-50"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ReelsSlider;
