import { Footer, Header } from "@/components/sections";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
