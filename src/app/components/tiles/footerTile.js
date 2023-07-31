import Image from "next/image";
import * as icons from "react-icons/fa";

export default function FooterTile() {
  return (
    <div className="w-full justify-center flex">
      <div className="absolute w-6/12 -mt-12 bg-gradient-to-br rounded-lg from-violet-500/80 via-purple-700/80 to-purple-950/80 flex px-16 py-8">
        <div className="flex-none text-white text-3xl font-bold">
          <p>Join Us!</p>
        </div>
        <div className="grow text-4xl">
          <button>Discord</button>
        </div>
      </div>
      <div className="bludenheimer grid grid-cols-3 w-full gap-8 bg-[#12001a]/50 ">
        <div className="flex flex-wrap py-12">
          <Image src="/stridelogo123.png" width={150} height={150} />
        </div>
        <div className="flex flex-col text-white">
          <p>Discord | Join Us!</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <icons.FaInstagram className="text-4xl" />
        </div>
      </div>
    </div>
  );
}
