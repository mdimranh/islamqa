import Image from "next/image"

const TwoItem = ({ images }: {images: string[]}) => {
    return (
      <div className="flex justify-center w-full max-h-96 rounded-lg overflow-hidden gap-1">
        <img src={images[0]} className="w-1/2 object-cover cursor-pointer" />
        <img src={images[1]} className="w-1/2 object-cover cursor-pointer" />
      </div>
    );
}

const ThreeItem = ({ images }: { images: string[] }) => {
  return (
    <div className="flex justify-center max-h-96 w-full gap-1 rounded-lg overflow-hidden">
      <img src={images[0]} className="w-1/2 object-cover cursor-pointer" />
      <div className="flex flex-col max-h-96 gap-1">
        <img src={images[1]} className="h-1/2 object-cover cursor-pointer" />
        <img src={images[2]} className="h-1/2 object-cover cursor-pointer" />
      </div>
    </div>
  );
};

const ManyItem = ({ images }: { images: string[] }) => {
  return (
    <div className="flex justify-center max-h-96 w-full gap-1 rounded-lg overflow-hidden">
      <img src={images[0]} className="w-1/2 object-cover cursor-pointer" />
      <div className="flex flex-col max-h-96 gap-1 relative">
        <img src={images[1]} className="h-1/2 object-cover cursor-pointer" />
        <img src={images[2]} className="h-1/2 object-cover cursor-pointer" />
        <div className="absolute h-1/2 -bottom-1 left-0 right-0 cursor-pointer bg-black bg-opacity-50 font-bold text-white flex justify-center items-center text-5xl">
          +{images.length - 3}
        </div>
      </div>
    </div>
  );
};

export const Gallery = ({ images }: { images: string[] }) => {
  const count = images.length;
  if (count === 2) {
    return <TwoItem images={images} />;
  } else if (count === 3) {
    return <ThreeItem images={images} />;
  } else if (count > 3) {
    return <ManyItem images={images} />;
  }
  return (
    <div className="flex justify-center max-h-96 rounded-lg overflow-hidden">
      <img className="object-cover cursor-pointer" src={images[0]} alt="" />
    </div>
  );
};

export const PhotoGallery = ({ images, className }: { images: string[]; className?: string }) => {
  return (
    <div className={className}>
      <div className="grid grid-rows-2 h-96 gap-1">
        <div className="relative">
          <div className="flex justify-center w-full h-full gap-1">
            <img
              src={images[0]}
              alt="Media 1"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
            />
            <img
              src={images[1]}
              alt="Media 1"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center w-full h-full gap-1">
            <img
              src={images[2]}
              alt="Media 1"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
            />
            <img
              src={images[3]}
              alt="Media 1"
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
            />
            <div className="w-full h-full relative">
              <img
                src={images[4]}
                alt="Media 1"
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
              />
              <div className="absolute left-0 top-0 right-0 bottom-0 cursor-pointer bg-black bg-opacity-20 font-bold text-white flex justify-center items-center text-5xl">+{ images.length - 5 }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 