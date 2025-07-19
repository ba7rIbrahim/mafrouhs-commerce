import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center py-6 w-full min-h-screen bg-gray-100 sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto min-h-[500px] min-w-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative flex items-center justify-center px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 min-h-[500px] min-w-[500px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
