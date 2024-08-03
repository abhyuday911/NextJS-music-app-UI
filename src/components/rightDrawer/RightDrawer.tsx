import Image from "next/image";
import React from "react";
import SongList from "../songLists/SongList";

const songs = [
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    lastPlayed: "4 mins ago",
    albumSrc:
      "https://i.scdn.co/image/ab67616d0000b273d98c789b5f6e3a9dbb1b7a9e",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    lastPlayed: "10 mins ago",
    albumSrc:
      "https://i.scdn.co/image/ab67616d0000b273b2c08d0c09432b109f8c1d72",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    lastPlayed: "20 mins ago",
    albumSrc:
      "https://i.scdn.co/image/ab67616d0000b273d217e5b4e2e3a5a5f2c4a3b1",
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    lastPlayed: "35 mins ago",
    albumSrc:
      "https://i.scdn.co/image/ab67616d0000b273f3b0e8b5a5c5a3d8e2c3b9a7",
  },
];

const RightDrawer = () => {
  return (
    <div className="w-2/6 bg-secondaryBackground-dark hidden lg:block">
      <div className="flex items-center justify-between text-zinc-400 p-4 px-6 cursor-pointer mb-4">
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
      <SongList title={"My Playlists"} list={songs} />
    </div>
  );
};

export default RightDrawer;
