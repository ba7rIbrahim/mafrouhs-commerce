import { Announcement } from "@/components/common/announcement";
import { Footer, Header } from "@/components/sections";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
