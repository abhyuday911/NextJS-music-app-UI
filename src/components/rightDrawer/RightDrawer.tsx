import Image from "next/image";
import React from "react";
import SongList from "../songLists/SongList";
import { songs } from "../../data/songLists";
import { playlists } from "../../data/playLists";

const RightDrawer = () => {
  return (
    <div className="w-2/6 bg-secondaryBackground-dark hidden lg:block pb-20 overflow-y-auto h-screen">
      <div className="flex items-center justify-between text-zinc-400 pt-4 px-6 cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src="https://via.placeholder.com/50"
            alt="cover"
            height={48}
            width={48}
            className="rounded-full"
          />
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">
            Wolion Luca
          </h3>
        </div>
        <div className="flex ml-4 gap-2">
          <button>
            <i className="ri-notification-3-fill text-2xl "></i>
          </button>
          <button className="hidden md:block">
            <i className="ri-arrow-down-s-line text-2xl"></i>
          </button>
        </div>
      </div>
      <SongList title={"Recently Played"} list={songs} />
      <SongList title={"My Playlists"} list={playlists} />
      <div className="px-4 mt-8">
        <button className="w-full py-2 px-4 bg-neutral-300 text-neutral-700 rounded-lg font-semibold mb-4">
          Create New Playlists
        </button>
      </div>
    </div>
  );
};

export default RightDrawer;
