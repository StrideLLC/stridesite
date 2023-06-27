"use client";

import { Phrase, Char } from "animatedtxt";

import * as transitions from "./transitions/transitions";

import Image from "next/image";

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
export async function welcomeTile() {
  return (
    <transitions.GlowFadeIn>
      <div className="bg-purple-900/10 w-full h-full rounded-xl py-10 flex flex-wrap">
        <div className="text-white/70 tracking-widest">
          <div className="Stride-Logo pl-20">
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
    </transitions.GlowFadeIn>
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

export async function aboutTile() {
  return (
    <div className="bg-purple-900/10 w-full h-full rounded-3xl py-8 px-28 justify-center items-center flex flex-wrap">
      <div className="text-white/70 tracking-widest">
        <p className="text-4xl text-bold text-center">
          Let us assist you in growing your reselling business to levels you
          never imagined possible.
        </p>
      </div>
      <div className="mb-4 mt-12">
        <transitions.HoverScaleRotate>
          <button className="text-3xl text-extrabold text-white/70 text-center rounded-full bg-purple-400/50 px-20 py-4">
            Learn More
          </button>
        </transitions.HoverScaleRotate>
      </div>
    </div>
  );
}
