
import * as transitions from "../transitions/transitions";
import { StrideText } from "./stridetext";
import { MotionDiv } from "@/lib/motion";
import Image from "next/image";

import AboutTileClient from "./aboutTile";

export async function logoImage() {
  return (
    <a href="/">
      <Image
        src="/stridelogo.png"
        alt="Stride Logo"
        width={130}
        height={130}
        className="opacity-50"
      />
    </a>
  );
}

export async function welcomeTile(){
  return(
    <StrideText />
  )
}

export async function WIP() {
  return (
    <div className="bg-purple-900/10 w-full h-full rounded-xl py-10 justify-center items-center flex flex-wrap">
      <div className="text-white/70 tracking-widest">
        <p className="text-2xl"> This page is currently under construction.</p>
      </div>
    </div>
  );
}

export async function aboutTile({ targetSelector }) {
  return(
  <AboutTileClient targetSelector={targetSelector} />
  )
}

