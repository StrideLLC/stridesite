import * as Motion from "@/lib/motion";
import * as transitions from "../transitions/transitions";
import Link from "next/link";

export default async function AboutTileClient() {
  return (
    <Motion.MotionDiv
      {...transitions.FadeInWhenVisible}
      className="bg-purple-900/10 w-full h-full rounded-3xl py-8 px-8 justify-center items-center flex flex-wrap"
    >
      <div className="text-white/50 ">
        <Motion.P className="md:text-4xl 2xl:text-5xl text-lg font-normal text-center">
          Let us assist you in growing your reselling business to levels you
          never imagined possible.
        </Motion.P>
      </div>
      <Motion.MotionDiv
        {...transitions.HoverScaleRotate}
        className="mb-4 md:mt-12 mt-8 z-50"
      >
        <Link href="#about">
          <button className="md:text-3xl text-xl text-extrabold text-white/70 text-center rounded-full bg-purple-400/50 md:px-32 md:py-4 px-4 py-2">
            Learn More
          </button>
        </Link>
      </Motion.MotionDiv>
    </Motion.MotionDiv>
  );
}
