import * as icons from "react-icons/fi";

import Link from "next/link";

export default function BackToTop() {
  return (
    <div
      className="z-40 backtotop opacity-0 bg-[#c084fc] hover:bg-purple-600 hover:cursor-pointer fixed bottom-0 h-12 w-12 right-0 p-4 m-4 rounded-full bg-white shadow-xl mb-4"
    >
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="#top">
            <icons.FiArrowUpCircle className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
