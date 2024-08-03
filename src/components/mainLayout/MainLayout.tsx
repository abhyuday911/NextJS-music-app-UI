import React from "react";
import SearchBar from "../../ui/searchBar/SearchBar";
import AlbumTrack from "../albumTrack/AlbumTrack";
import SongList from "../songLists/SongList";

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
