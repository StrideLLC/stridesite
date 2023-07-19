
import * as transitions from "../transitions/transitions";
import { StrideText, StrideTextMobile } from "./stridetext";
import { NavBarDesktop } from "./navigation";
import { MotionDiv } from "@/lib/motion";
import Image from "next/image";


import Link from "next/link";

import AboutTileClient from "./aboutTile";

export async function logoImage() {
  return (
    <MotionDiv className="md:w-[100px] h-[100px] w-[75px] h-[75px] md:ml-0 -ml-4" {...transitions.HoverScaleRotate} initial={{opacity: 0, x: -100, rotate: -40}} whileInView={{opacity: 1, x: 0, rotate: 0}} viewport={{once: true}} transition={{type: 'spring', delay: 0, stiffness: 200, damping: 10}} >
    <Link href="/">
      <Image
        src="/stridelogo123.png"
        alt="Stride Logo"
        width={100}
        height={100}
        className="opacity-50"
      />
    </Link>
    </MotionDiv>
  );
}

export async function NavBar(){
  return(
      <NavBarDesktop />
  )
}

export async function welcomeTile(){
  return(
    <StrideText />
  );
}

export async function WelcomeTileMobile() {
  return (
    <StrideTextMobile />
  );
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

export async function servicesTile() {
  return (
    <div className="bg-purple-900/10 w-full h-full rounded-xl py-10 justify-center items-center flex flex-wrap">
      <div className="text-white/70 tracking-widest">
        <p className="text-2xl"> Services</p>
      </div>
    </div>
  );
}

export async function AboutUs(){
  return(
    <MotionDiv initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: false}} className="bg-purple-900/10 w-full h-full rounded-xl py-10 justify-center items-center flex flex-wrap">
      <div className="text-white/70 tracking-widest">
        <p className="text-2xl"> About</p>
      </div>
    </MotionDiv>
  )
}
