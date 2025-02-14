import MainLayout from "@/components/mainLayout/MainLayout";
import MenuDrawer from "@/components/menuDrawer/MenuDrawer";
import Player from "@/components/player/Player";
import RightDrawer from "@/components/rightDrawer/RightDrawer";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <main className="h-screen relative text-neutral-300">
      <div className="flex h-full">
        <MenuDrawer />
        <MainLayout />
        <RightDrawer />
        <Player />
      </div>
    </main>
  );
}
