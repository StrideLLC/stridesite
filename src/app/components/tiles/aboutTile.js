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
    <MotionDiv {...transitions.FadeInWhenVisible} className="bg-purple-900/10 w-full h-full rounded-3xl py-8 px-28 justify-center items-center flex flex-wrap">
      <div className="text-white/50 ">
        <p className="text-4xl font-normal text-center">
          Let us assist you in growing your reselling business to levels you never imagined possible.
        </p>
      </div>
      <MotionDiv {...transitions.HoverScaleRotate} className="mb-4 mt-12">
          <button className="text-3xl text-extrabold text-white/70 text-center rounded-full bg-purple-400/50 px-20 py-4" onClick={handleLearnMoreClick}>
            Learn More
          </button>
      </MotionDiv>
      <div ref={scrollRef}></div>
    </MotionDiv>
  );
}