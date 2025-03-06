import { ReactNode } from "react";

interface descpprop {
  children: ReactNode;
}
export default function Menu({ children }: descpprop) {
  return (
    <>
      <div className="w-1/2 h-screen float-right bg-gradient-to-b from-gray-900 to-gray-600  rounded-2xl">
        {children}
      </div>
    </>
  );
}
