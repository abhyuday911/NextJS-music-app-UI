import Image from "next/image";
import React from "react";

interface Song {
  title: string;
  artist: string;
  lastPlayed: string;
  albumSrc: string;
}

type Props = {
  title: string;
  list: Song[];
  mobile?: boolean;
};

const SongList: React.FC<Props> = ({ title, list, mobile }) => {
  return (
    <div className={`px-6 py-2${mobile && " lg:hidden"}`}>
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-lg text-zinc-300">{title}</h5>
        <button className="text-sm font-extralight text-zinc-400">
          See all
        </button>
      </div>
      {(mobile ? list.slice(2) : list).map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 mb-2 cursor-pointer hover:scale-[0.98] duration-200"
        >
          <div className="w-10 h-10 relative">
            <Image
              src={"https://via.placeholder.com/50"}
              alt="album"
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
          <div>
            <h3 className="text-sm font-light text-zinc-300">{item.title}</h3>
            <p className="text-xs font-thin text-zinc-400">{item.artist}</p>
          </div>
          <div className="ml-auto">
            <p className="text-xs text-zinc-400">{item.lastPlayed}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
