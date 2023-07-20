"use client";

import * as icons from "react-icons/fi";

export default function BackToTop() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  return (
    <div onClick={handleScrollTop} className="backtotop opacity-0 bg-[#c084fc] hover:bg-purple-600 hover:cursor-pointer fixed bottom-0 h-12 w-12 right-0 p-4 m-4 rounded-full bg-white shadow-xl mb-4">
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <icons.FiArrowUpCircle className="text-3xl" />
        </div>
      </div>
    </div>
  );
}
