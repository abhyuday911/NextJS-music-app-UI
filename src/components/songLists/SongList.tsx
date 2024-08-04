import Image from "next/image";
import React, { Suspense } from "react";

interface Song {
  title: string;
  subTitle: string;
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
    <div className={`px-4 md:px-6 py-2${mobile && " lg:hidden"} mt-4 md:mt-8`}>
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-lg text-zinc-300">{title}</h5>
        <button className="text-sm font-extralight text-zinc-400">
          See all
        </button>
      </div>
      {(mobile
        ? list.sort(() => 0.5 - Math.random()).slice(0,3)
        : list
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .sort(
              (a, b) =>
                Number(a.lastPlayed.split(" ")[0]) -
                Number(b.lastPlayed.split(" ")[0])
            )
      ).map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 mb-2 cursor-pointer hover:scale-[0.98] duration-200"
        >
          <Suspense
            fallback={<div className="w-10 h-10 bg-slate-500 rounded-sm"></div>}
          >
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src={item.albumSrc}
                alt="album"
                fill={true}
                style={{ objectFit: "cover" }}
                className="rounded-sm"
                sizes="(max-width: 768px) 100px, (max-width: 1200px) 70px, 60px"
              />
            </div>
          </Suspense>
          <div>
            <h3 className="text-sm font-light text-zinc-300">{item.title}</h3>
            <p className="text-xs font-thin text-zinc-400">{item.subTitle}</p>
          </div>
          <div className="ml-auto">
            <p className="text-xs text-zinc-400 text-nowrap">
              {item.lastPlayed}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
