import MainLayout from "@/components/mainLayout/MainLayout";
import MenuDrawer from "@/components/menuDrawer/MenuDrawer";
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <MenuDrawer />
      <MainLayout />
    </main>
  );
}
