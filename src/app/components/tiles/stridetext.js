"use client";

import { Phrase, Char } from "animatedtxt";
import { MotionDiv } from "@/lib/motion";

import * as transitions from "../transitions/transitions";

export async function StrideText() {
  return (
    <MotionDiv {...transitions.FadeInWhenVisible}>
      <MotionDiv
        {...transitions.GlowFadeIn}
        className="bg-purple-900/10 w-full h-full rounded-xl py-10 hidden md:flex flex-wrap justify-center items-center"
      >
        <div className="">
          <div className="Stride-Logo flex justify-center items-center">
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
          <div className="flex pt-8">
            <Phrase
              margin={5}
              size={20}
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
                size={20}
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
                size={20}
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
      </MotionDiv>
    </MotionDiv>
  );
}


export function StrideTextMobile() {
  return(
    <MotionDiv className="" {...transitions.FadeInWhenVisible}>
      <MotionDiv
        {...transitions.GlowFadeIn}
        className="md:hidden bg-purple-900/10 w-full h-full rounded-xl py-10 flex flex-wrap justify-center items-center mt-16"
        >
          <div className="Stride-Logo flex justify-center items-center">
            <Phrase
              margin={10}
              size={35}
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
        </MotionDiv>
    </MotionDiv>
  )
}