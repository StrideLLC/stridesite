import * as transitions from "../transitions/transitions";
import { StrideText, StrideTextMobile } from "./stridetext";
import { NavBarDesktop } from "./navigation";
import * as Motion from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import AboutTileClient from "./aboutTile";
import { Shoesvg } from "@/lib/shoesvg";

export async function logoImage() {
  return (
    <Motion.MotionDiv
      className="md:w-[100px] h-[100px] w-[75px] h-[75px] md:ml-0 -ml-4"
      {...transitions.HoverScaleRotate}
      initial={{ opacity: 0, x: -100, rotate: -40 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay: 0, stiffness: 200, damping: 10 }}
    >
      <Link href="/">
        <Image
          src="/stridelogo123.png"
          alt="Stride Logo"
          width={100}
          height={100}
          className="opacity-50"
        />
      </Link>
    </Motion.MotionDiv>
  );
}

export async function NavBar() {
  return <NavBarDesktop />;
}

export async function welcomeTile() {
  return <StrideText />;
}

export async function WelcomeTileMobile() {
  return <StrideTextMobile />;
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
  return <AboutTileClient targetSelector={targetSelector} />;
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

export async function AboutUs() {
  return (
    <Motion.MotionDiv
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="bg-purple-900/50 mx-auto w-full h-full rounded-xl flex flex-wrap"
    >
      <div className="text-white/70 tracking-wide mt-8 mx-20 w-full h-full grid grid-cols-4 gx-auto">
        <div className="col-span-2">
          <Motion.P
            initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}}
            className="text-3xl tracking-widest font-bold text-zinc-300"
            style={{ textShadow: "8px 8px 10px #210342" }}
          >
            Who are we?
          </Motion.P>
          <Motion.P initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0}} viewport={{once: false}} className="text-2xl mt-8 mb-8">
            At Stride, we believe in the power of progress and the journey of
            growth. Our motto, "Elevate Your Business," reflects our commitment
            to empowering entrepreneurs, resellers, and creatives to reach new
            heights in their ventures. With a range of innovative services, we
            are dedicated to providing you with the tools and resources needed
            to succeed in a dynamic marketplace.
          </Motion.P>
        </div>
        <div className="col-span-1 ghost" />
        <Motion.MotionDiv initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{type:'spring', delayChildren: 2, stiffness: 200, damping: 10, duration: 1, delay: 0.5}} viewport={{once: false}} className="flex items-center justify-center">
          <Shoesvg />
        </Motion.MotionDiv>
      </div>
    </Motion.MotionDiv>
  );
}
