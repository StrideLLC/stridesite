"use client";

import { Phrase, Char } from "animatedtxt";

import { GlowFadeIn } from "./transitions/transitions";
import Image from "next/image";

export async function logoImage() {
    return(
    <a href="/">
        <Image src="/stridelogo.png" alt="Stride Logo" width={130} height={130} className="opacity-50"/>
    </a>
    )
}
export async function welcomeTile() {
  return (
    <GlowFadeIn >
    <div className="bg-purple-900/10 w-full h-full rounded-xl py-10 flex flex-wrap">
    <div className="text-white/70 tracking-widest">
        <div className="Stride-Logo pl-20" >
          <Phrase
            margin={10}
            size={70}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#FFFFFF"
            delay={0.5}
            font="basic-medium"
          >
            <Char char="S" />
            <Char char="T" />
            <Char char="R" />
            <Char char="I" />
            <Char char="D" />
            <Char char="E" />
          </Phrase>
        </div>
        <div className="flex pl-20 pt-8">
          <Phrase
            margin={5}
            size={30}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            delay={1.2}
            font="basic-thin"
          >
            <Char char="E" />
            <Char char="L" />
            <Char char="E" />
            <Char char="V" />
            <Char char="A" />
            <Char char="T" />
            <Char char="E" />
          </Phrase>
          <div className="pl-4">
          <Phrase
            margin={5}
            size={30}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            font="basic-thin"
            delay={1.5}
          >
            <Char char="Y" />
            <Char char="O" />
            <Char char="U" />
            <Char char="R" />
          </Phrase>
        </div>
        <div className="pl-4">
          <Phrase
            margin={5}
            size={30}
            cubicBezier={[0.68, 0.04, 0.45, 0.98]}
            color="#ffffff"
            font="basic-thin"
            delay={1.9}
          >
            <Char char="B" />
            <Char char="U" />
            <Char char="S" />
            <Char char="I" />
            <Char char="N" />
            <Char char="E" />
            <Char char="S" />
            <Char char="S" />
          </Phrase>
          </div>
        </div>
      </div>
    </div>
    </GlowFadeIn>
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
