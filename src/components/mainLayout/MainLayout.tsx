import React from "react";
import SearchBar from "../../ui/searchBar/SearchBar";
import AlbumTrack from "../albumTrack/AlbumTrack";
import SongList from "../songLists/SongList";
import { songs } from "../../data/songLists";
import { data } from "../../data/albumTrack";
import { playlists } from "../../data/playLists";
import Image from "next/image";

const MainLayout = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-8 pb-20 overflow-y-auto max-h-screen">
      <SearchBar />
      <div className="flex h-[20vmax] bg-slate-600 rounded-lg my-6 mb-4 md:my-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] duration-150">
        <Image
          // src={"https://images.unsplash.com/photo-1696787207986-7133d8a89425?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwYWVzdGhldGljfGVufDB8fDB8fHww"}
          src={"https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG11c2ljfGVufDB8fDB8fHww"}
          alt="album"
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <SongList title={"Recently Played"} mobile={true} list={songs} />
      <SongList title={"My Playlists"} mobile={true} list={playlists} />
      <AlbumTrack title={"Hello, Wolion"} data={data} />
      <AlbumTrack title={"This Season Special"} data={data} />
      <AlbumTrack title={"Party Anthems"} data={data} />
    </div>
  );
};

export default MainLayout;
