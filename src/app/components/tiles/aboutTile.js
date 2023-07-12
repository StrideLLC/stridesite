'use client'

import React, { useRef } from 'react';
import { MotionDiv } from '@/lib/motion';
import * as transitions from '../transitions/transitions';

export default async function AboutTileClient({ targetSelector }) {
    const scrollRef = useRef(null);
      
    const handleLearnMoreClick = () => {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        else{
            alert('error - please refresh')
        }
      };


  return (
    <MotionDiv {...transitions.FadeInWhenVisible} className="bg-purple-900/10 w-full h-full rounded-3xl py-8 px-8 justify-center items-center flex flex-wrap">
      <div className="text-white/50 ">
        <p className="md:text-4xl text-lg font-normal text-center">
          Let us assist you in growing your reselling business to levels you never imagined possible.
        </p>
      </div>
      <MotionDiv {...transitions.HoverScaleRotate} className="mb-4 md:mt-12 mt-8">
          <button className="md:text-3xl text-xl text-extrabold text-white/70 text-center rounded-full bg-purple-400/50 md:px-20 md:py-4 px-4 py-2" onClick={handleLearnMoreClick}>
            Learn More
          </button>
      </MotionDiv>
      <div ref={scrollRef}></div>
    </MotionDiv>
  );
}