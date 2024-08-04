import Image from "next/image";
import React, { Suspense } from "react";

interface Props {
  title: string;
  artist: string;
  cover: string;
}

const AlbumCard: React.FC<Props> = ({ title, artist, cover }) => {
  return (
    <div className=" w-1/3 max-w-48 rounded-md overflow-hidden mt-3 mb-2 flex-shrink-0 cursor-pointer hover:scale-105 transition-scale duration-300 animate-wiggle animate-twice animate-ease-in-out">
      <Suspense
        fallback={<div className="aspect-square w-full"></div>}
      >
        <div className="aspect-square w-full relative rounded-md overflow-hidden">
          <Image
            src={cover}
            alt="album"
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 10vmax, (max-width: 1200px) 10vmax, 10vmax"
          />
        </div>
      </Suspense>
      <div className="py-2">
        <h2 className="text-sm font-semibold text-gray-200">{title}</h2>
        <p className="text-xs text-gray-600 mt-1">{artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
