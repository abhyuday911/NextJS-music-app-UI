import AlbumCard from "@/ui/albumCard/AlbumCard";
import React from "react";

interface Album {
  title: string;
  artist: string;
  cover: string;
}

type Props = {
  title: string;
  data: Album[];
};

const AlbumTrack: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="w-full mt-2">
      <h1 className="text-2xl">{title}</h1>
      <div className="w-full overflow-scroll flex  gap-4 custom-scrollbar px-1">
        {data.map((item, index) => (
          <AlbumCard
            key={index}
            title={item.title}
            artist={item.artist}
            cover={item.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumTrack;
