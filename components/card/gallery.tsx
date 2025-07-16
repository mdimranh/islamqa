import { ChevronLeft, ChevronRight, Download, Info, RotateCcw, Share, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useEffect, useState } from 'react';

const ImageSlider = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black bg-opacity-50">
        <div className="text-white font-medium">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded">
            <Share size={20} />
          </button>
          <button className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded">
            <RotateCcw size={20} />
          </button>
          <button 
            className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>
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

      {/* Main Image Area */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Image */}
        <div className="relative max-w-full w-full max-h-screen h-full">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`max-w-full w-full h-[calc(100vh-150px)] max-h-screen object-contain transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
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
            Photo by - <span className="font-medium">Tobias Rademacher</span>
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Location - Puezgruppe, Wolkenstein in Gröden, Südtirol, Italien | layers of blue.
          </p>
        </div>
      )}

      {/* Thumbnail Strip */}
      <div className="bg-black bg-opacity-50 p-4">
        <div className="flex justify-center gap-1 overflow-x-auto max-w-full">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-white' 
                  : 'border-transparent hover:border-gray-400'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const TwoItem = ({ images, onImageClick }) => {
  return (
    <div className="flex justify-center w-full max-h-96 rounded-lg overflow-hidden gap-1">
      <img 
        src={images[0]} 
        className="w-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
        onClick={() => onImageClick(0)}
      />
      <img 
        src={images[1]} 
        className="w-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
        onClick={() => onImageClick(1)}
      />
    </div>
  );
};

const ThreeItem = ({ images, onImageClick }) => {
  return (
    <div className="flex justify-center max-h-96 w-full gap-1 rounded-lg overflow-hidden">
      <img 
        src={images[0]} 
        className="w-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
        onClick={() => onImageClick(0)}
      />
      <div className="flex flex-col max-h-96 gap-1">
        <img 
          src={images[1]} 
          className="h-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
          onClick={() => onImageClick(1)}
        />
        <img 
          src={images[2]} 
          className="h-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
          onClick={() => onImageClick(2)}
        />
      </div>
    </div>
  );
};

const ManyItem = ({ images, onImageClick }) => {
  return (
    <div className="flex justify-center max-h-96 w-full gap-1 rounded-lg overflow-hidden">
      <img 
        src={images[0]} 
        className="w-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
        onClick={() => onImageClick(0)}
      />
      <div className="flex flex-col max-h-96 gap-1 relative">
        <img 
          src={images[1]} 
          className="h-1/2 object-cover cursor-pointer hover:opacity-95 transition-opacity" 
          onClick={() => onImageClick(1)}
        />
        <div className="h-1/2 relative">
          <img 
            src={images[2]} 
            className="h-full w-full object-cover cursor-pointer hover:opacity-95 transition-opacity" 
            onClick={() => onImageClick(2)}
          />
          <div 
            className="absolute h-full -bottom-1 left-0 right-0 cursor-pointer bg-black bg-opacity-50 font-bold text-white flex justify-center items-center text-5xl hover:bg-opacity-60 transition-all"
            onClick={() => onImageClick(2)}
          >
            +{images.length - 3}
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ images, onImageClick }) => {
  const count = images.length;
  if (count === 2) {
    return <TwoItem images={images} onImageClick={onImageClick} />;
  } else if (count === 3) {
    return <ThreeItem images={images} onImageClick={onImageClick} />;
  } else if (count > 3) {
    return <ManyItem images={images} onImageClick={onImageClick} />;
  }
  return (
    <div className="flex justify-center max-h-96 rounded-lg overflow-hidden">
      <img 
        className="object-cover cursor-pointer hover:opacity-95 transition-opacity" 
        src={images[0]} 
        alt=""
        onClick={() => onImageClick(0)}
      />
    </div>
  );
};

export const PhotoGallery = ({ images, className }) => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowSlider(true);
  };
  return (
    <div className={className}>
      <div className="grid grid-rows-2 h-96 gap-1">
        <div className="relative">
          <div className="flex justify-center w-full h-full gap-1">
            <img
              src={images[0]}
              alt="Media 1"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => handleImageClick(0)}
            />
            <img
              src={images[1]}
              alt="Media 2"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => handleImageClick(1)}
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center w-full h-full gap-1">
            <img
              src={images[2]}
              alt="Media 3"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => handleImageClick(2)}
            />
            <img
              src={images[3]}
              alt="Media 4"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => handleImageClick(3)}
            />
            <div className="w-full h-full relative">
              <img
                src={images[4]}
                alt="Media 5"
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleImageClick(4)}
              />
              <div 
                className="absolute left-0 top-0 right-0 bottom-0 cursor-pointer bg-black bg-opacity-20 font-bold text-white flex justify-center items-center text-5xl hover:bg-opacity-30 transition-all"
                onClick={() => handleImageClick(4)}
              >
                +{images.length - 5}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSlider && (
        <ImageSlider
          images={images}
          initialIndex={selectedImageIndex}
          onClose={() => setShowSlider(false)}
        />
      )}
    </div>
  );
};