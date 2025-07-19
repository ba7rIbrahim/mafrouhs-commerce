import { Logo } from "@/components/common";

export const Footer = () => {
  return (
    <footer className="mt-20 text-white bg-black">
      <div className="container">
        <div className="max-w-screen-xl py-8 mx-auto">
          <div className="flex flex-col items-center gap-6 md:flex-row sm:items-center md:justify-between">
            <Logo />
            <p className="text-sm">
              Copyright &copy; 2025. All rights reserved by <b>bakr</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
