import React from "react";
import SearchBar from "../../ui/searchBar/SearchBar";
import AlbumTrack from "../albumTrack/AlbumTrack";

const data = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://i.scdn.co/image/ab67616d0000b273d3b0e0d8a5c5a7e9b1b1f8e8",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    cover: "https://i.scdn.co/image/ab67616d0000b2737b8e8e0d8a5c7e9b2e9e9e8e",
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    cover: "https://i.scdn.co/image/ab67616d0000b2734d9d8f6c4c3b5a7e0e9f8f8e",
  },
  {
    title: "Kiss Me More",
    artist: "Doja Cat",
    cover: "https://i.scdn.co/image/ab67616d0000b2731d7a8a5c8e3b8f9f0e8e8e8",
  },
  {
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    cover: "https://i.scdn.co/image/ab67616d0000b2733b8e8e0d8a5c7e9b2e9e9e8e",
  },
  {
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    cover: "https://i.scdn.co/image/ab67616d0000b2735e9d8f6c4e3b7a7e3f8f8e8e",
  },
  {
    title: "drivers license",
    artist: "Olivia Rodrigo",
    cover: "https://i.scdn.co/image/ab67616d0000b2736d8e8e0d8a5c7e9b1b1f8e8e",
  },
  {
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    cover: "https://i.scdn.co/image/ab67616d0000b2731d8e8e0d8a5c7e9b2e9e9e9e",
  },
];

const MainLayout = () => {
  return (
    <div className="w-full pl-16 pr-2 lg:pl-8 lg:px-8 pb-20 overflow-y-auto max-h-screen">
      <SearchBar />
      <div className="flex h-[20vmax] bg-slate-600 rounded-lg mt-8 mb-8"></div>
      <AlbumTrack title={"Hello, Wolion"} data={data} />
      <AlbumTrack title={"This Season Special"} data={data} />
      <AlbumTrack title={"Party Anthems"} data={data} />
    </div>
  );
};

export default MainLayout;
