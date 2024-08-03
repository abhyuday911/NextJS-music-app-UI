import React from "react";
import SearchBar from "../../ui/searchBar/SearchBar";
import AlbumTrack from "../albumTrack/AlbumTrack";
import SongList from "../songLists/SongList";
import { songs } from "../../data/songLists";
import { data } from "../../data/albumTrack";

const MainLayout = () => {
  return (
    <div className="w-full px-4 lg:px-8 pb-20 overflow-y-auto max-h-screen">
      <SearchBar />
      <div className="flex h-[20vmax] bg-slate-600 rounded-lg my-6 mb-4 md:my-8"></div>
      <SongList title={"Recently Played"} mobile={true} list={songs} />
      <SongList title={"My Playlists"} mobile={true} list={songs} />
      <AlbumTrack title={"Hello, Wolion"} data={data} />
      <AlbumTrack title={"This Season Special"} data={data} />
      <AlbumTrack title={"Party Anthems"} data={data} />
    </div>
  );
};

export default MainLayout;
