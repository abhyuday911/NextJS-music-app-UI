import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  artist: string;
  cover: string;
}

const AlbumCard: React.FC<Props> = ({ title, artist, cover }) => {
  return (
    <div className=" w-2/5 max-w-44 rounded-md overflow-hidden mt-3 mb-2 flex-shrink-0 cursor-pointer hover:scale-105 transition-scale duration-300 animate-wiggle animate-twice animate-ease-in-out">
      <div className="aspect-square w-full relative">
        <Image
          src="https://via.placeholder.com/400x400"
          alt="album"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="py-2">
        <h2 className="text-sm font-semibold text-gray-200">{title}</h2>
        <p className="text-xs text-gray-600 mt-1">{artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
