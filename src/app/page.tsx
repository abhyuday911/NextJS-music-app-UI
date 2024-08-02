import MainLayout from "@/components/mainLayout/MainLayout";
import MenuDrawer from "@/components/menuDrawer/MenuDrawer";
// import Player from "@/components/player/Player";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <main className="h-screen relative">
      <div className="flex">
        <MenuDrawer />
        <MainLayout />
        <div className="w-2/6 bg-secondaryBackground-dark hidden lg:block"></div>
      </div>
    </main>
  );
}
