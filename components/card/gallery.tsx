import { ChevronLeft, ChevronRight, Download, Info, Play, RotateCcw, Share, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { VideoPlayer } from '../video/player';

const MediaSlider = ({ media, initialIndex = 0, onClose }: {
  media: Array<{ src: string; type: 'image' | 'video'; author?: string; description?: string }>;
  initialIndex?: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.type === 'video';

  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsZoomed(false);
  };

  const goToMedia = (index: number) => {
    setCurrentIndex(index);
    setIsZoomed(false);
  };

  const handleMediaClick = () => {
    if (!isVideo) {
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black bg-opacity-50">
        <div className="text-white font-medium">
          {currentIndex + 1} / {media.length}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded">
            <Share size={20} />
          </button>
          <button className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded">
            <RotateCcw size={20} />
          </button>
          {!isVideo && (
            <button
              className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
            </button>
          )}
          <button className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded">
            <Download size={20} />
          </button>
          <button
            className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded"
            onClick={() => setShowInfo(!showInfo)}
          >
            <Info size={20} />
          </button>
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Media Area */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Media */}
        <div className="relative max-w-full w-full max-h-screen h-full">
          {isVideo ? (
            <div className="w-full h-[calc(100vh-150px)] max-h-screen flex items-center justify-center">
              <VideoPlayer
                src={currentMedia.src}
              />
            </div>
          ) : (
            <img
              src={currentMedia.src}
              alt={`Media ${currentIndex + 1}`}
              className={`max-w-full w-full h-[calc(100vh-150px)] max-h-screen object-contain transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
              onClick={handleMediaClick}
            />
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Info Panel */}
      {showInfo && (
        <div className="bg-black bg-opacity-70 text-white p-4 max-h-32 overflow-y-auto">
          <p className="text-sm">
            {isVideo ? 'Video' : 'Photo'} by - <span className="font-medium">{currentMedia.author || 'Unknown'}</span>
          </p>
          <p className="text-xs text-gray-300 mt-1">
            {currentMedia.description || 'No description available'}
          </p>
        </div>
      )}

      {/* Thumbnail Strip */}
      <div className="bg-black bg-opacity-50 p-4">
        <div className="flex justify-center gap-1 overflow-x-auto max-w-full">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => goToMedia(index)}
              className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all relative ${index === currentIndex
                ? 'border-white'
                : 'border-transparent hover:border-gray-400'
                }`}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <Play size={12} className="text-white" />
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const MediaItem = ({ src, type, className, onClick, showOverlay = false, overlayText = '' }: {
  src: string;
  type: 'image' | 'video';
  className?: string;
  onClick: () => void;
  showOverlay?: boolean;
  overlayText?: string;
}) => {
  if (type === 'video') {
    return (
      <div className={`${className} relative cursor-pointer hover:opacity-95 transition-opacity`} onClick={onClick}>
        <video
          src={src}
          className="w-full h-full object-cover"
          muted
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <Play size={24} className="text-white" />
        </div>
        {showOverlay && (
          <div className="absolute left-0 top-0 right-0 bottom-0 cursor-pointer bg-black bg-opacity-50 font-bold text-white flex justify-center items-center text-5xl hover:bg-opacity-60 transition-all">
            {overlayText}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${className} relative cursor-pointer hover:opacity-95 transition-opacity`} onClick={onClick}>
      <img
        src={src}
        className="w-full h-full object-cover"
        alt=""
      />
      {showOverlay && (
        <div className="absolute left-0 top-0 right-0 bottom-0 cursor-pointer bg-black bg-opacity-50 font-bold text-white flex justify-center items-center text-5xl hover:bg-opacity-60 transition-all">
          {overlayText}
        </div>
      )}
    </div>
  );
};

const TwoItem = ({ media, onMediaClick }: {
  media: Array<{ src: string; type: 'image' | 'video'; author?: string; description?: string }>;
  onMediaClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center w-full max-h-96 rounded-lg overflow-hidden gap-1">
      <MediaItem
        src={media[0].src}
        type={media[0].type}
        className="w-1/2"
        onClick={() => onMediaClick(0)}
      />
      <MediaItem
        src={media[1].src}
        type={media[1].type}
        className="w-1/2"
        onClick={() => onMediaClick(1)}
      />
    </div>
  );
};

const ThreeItem = ({ media, onMediaClick }: {
  media: Array<{ src: string; type: 'image' | 'video'; author?: string; description?: string }>;
  onMediaClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center max-h-96 w-full gap-1 rounded-lg overflow-hidden">
      <MediaItem
        src={media[0].src}
        type={media[0].type}
        className="w-1/2"
        onClick={() => onMediaClick(0)}
      />
      <div className="flex flex-col max-h-96 gap-1">
        <MediaItem
          src={media[1].src}
          type={media[1].type}
          className="h-1/2"
          onClick={() => onMediaClick(1)}
        />
        <MediaItem
          src={media[2].src}
          type={media[2].type}
          className="h-1/2"
          onClick={() => onMediaClick(2)}
        />
      </div>
    </div>
  );
};

const ManyItem = ({ media, onMediaClick }: {
  media: Array<{ src: string; type: 'image' | 'video'; author?: string; description?: string }>;
  onMediaClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center max-h-96 w-full gap-1 rounded-lg overflow-hidden">
      <MediaItem
        src={media[0].src}
        type={media[0].type}
        className="w-1/2"
        onClick={() => onMediaClick(0)}
      />
      <div className="flex flex-col max-h-96 gap-1 relative">
        <MediaItem
          src={media[1].src}
          type={media[1].type}
          className="h-1/2"
          onClick={() => onMediaClick(1)}
        />
        <MediaItem
          src={media[2].src}
          type={media[2].type}
          className="h-1/2"
          onClick={() => onMediaClick(2)}
          showOverlay={true}
          overlayText={`+${media.length - 3}`}
        />
      </div>
    </div>
  );
};

const Gallery = ({ media, onMediaClick }: {
  media: Array<{ src: string; type: 'image' | 'video'; author?: string; description?: string }>;
  onMediaClick: (index: number) => void;
}) => {
  const count = media.length;
  if (count === 2) {
    return <TwoItem media={media} onMediaClick={onMediaClick} />;
  } else if (count === 3) {
    return <ThreeItem media={media} onMediaClick={onMediaClick} />;
  } else if (count > 3) {
    return <ManyItem media={media} onMediaClick={onMediaClick} />;
  }
  return (
    <div className="flex justify-center max-h-96 rounded-lg overflow-hidden">
      <MediaItem
        src={media[0].src}
        type={media[0].type}
        className=""
        onClick={() => onMediaClick(0)}
      />
    </div>
  );
};

export const MediaGallery = ({ media, className }: {
  media: Array<{ src: string; type: 'image' | 'video'; author?: string; description?: string }>;
  className?: string;
}) => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const handleMediaClick = (index: number) => {
    setSelectedMediaIndex(index);
    setShowSlider(true);
  };

  // Ensure media has the correct format and filter out invalid items
  const formattedMedia = media
    .map(item => {
      if (typeof item === 'string') {
        // Auto-detect type based on file extension
        const isVideo = /\.(mp4|webm|ogg|mov|avi)$/i.test(item);
        return {
          src: item,
          type: isVideo ? 'video' : 'image',
          author: 'Unknown',
          description: 'No description available'
        };
      }
      // Only allow items with valid src and type
      if (
        typeof item.src === 'string' &&
        (item.type === 'image' || item.type === 'video')
      ) {
        return item;
      }
      // Otherwise, skip this item
      return null;
    })
    .filter((item): item is { src: string; type: 'image' | 'video'; author?: string; description?: string } => !!item);

  return (
    <div className={className}>
      <div className="grid grid-rows-2 h-96 gap-1">
        <div className="relative">
          <div className="flex justify-center w-full h-full gap-1">
            <MediaItem
              src={formattedMedia[0]?.src}
              type={formattedMedia[0]?.type as 'image' | 'video'}
              className="w-full h-full"
              onClick={() => handleMediaClick(0)}
            />
            {formattedMedia[1] && (
              <MediaItem
                src={formattedMedia[1].src}
                type={formattedMedia[1].type as 'image' | 'video'}
                className="w-full h-full"
                onClick={() => handleMediaClick(1)}
              />
            )}
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center w-full h-full gap-1">
            {formattedMedia[2] && (
              <MediaItem
                src={formattedMedia[2].src}
                type={formattedMedia[2].type as 'image' | 'video'}
                className="w-full h-full"
                onClick={() => handleMediaClick(2)}
              />
            )}
            {formattedMedia[3] && (
              <MediaItem
                src={formattedMedia[3].src}
                type={formattedMedia[3].type as 'image' | 'video'}
                className="w-full h-full"
                onClick={() => handleMediaClick(3)}
              />
            )}
            {formattedMedia[4] && (
              <MediaItem
                src={formattedMedia[4].src}
                type={formattedMedia[4].type as 'image' | 'video'}
                className="w-full h-full"
                onClick={() => handleMediaClick(4)}
                showOverlay={formattedMedia.length > 5}
                overlayText={`+${formattedMedia.length - 5}`}
              />
            )}
          </div>
        </div>
      </div>
      {showSlider && (
        <MediaSlider
          media={formattedMedia}
          initialIndex={selectedMediaIndex}
          onClose={() => setShowSlider(false)}
        />
      )}
    </div>
  );
};

// Demo component to show usage
const Demo = () => {
  const sampleMedia: Array<{ src: string; type: "image" | "video"; author: string; description: string }> = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      type: "image",
      author: "Mountain Explorer",
      description: "Beautiful mountain landscape at sunset"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      type: "video",
      author: "Video Creator",
      description: "Big Buck Bunny sample video"
    },
    {
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      type: "image",
      author: "Beach Photographer",
      description: "Tropical beach scene"
    },
    {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
      type: "image",
      author: "Code Master",
      description: "Programming workspace"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      type: "video",
      author: "Animation Studio",
      description: "Elephant's Dream sample video"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      type: "image",
      author: "Forest Walker",
      description: "Dense forest path"
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Media Gallery with VideoJS</h1>
      <MediaGallery media={sampleMedia} className="w-full" />

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Features:</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Uses VideoJS player for professional video playback</li>
          <li>• Mixed image and video gallery support</li>
          <li>• Responsive design with thumbnail navigation</li>
          <li>• Fullscreen slider with keyboard navigation</li>
          <li>• Auto-detects media types from file extensions</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2 mt-4">Usage:</h3>
        <p className="text-sm text-gray-700">
          Pass an array of media objects with `src`, `type` ('image' or 'video'), `author`, and `description` properties.
          Videos will use the VideoJS player with professional controls and features.
        </p>
      </div>
    </div>
  );
};

export default Demo;