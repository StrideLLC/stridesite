import * as Motion from "@/lib/motion";
import { Shoesvg } from "@/lib/shoesvg";

export default function AboutTile(){
  return (
    <Motion.MotionDiv
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="bg-purple-900/50 mx-auto w-full h-full laptop:rounded-xl flex flex-wrap"
    >
      <div className="text-white/70 tracking-wide py-4 px-8 laptop:py-8 laptop:px-20 w-full h-full grid laptop:grid-cols-3 grid-cols-1 ">
        <div className="laptop:col-span-2 col-span-1 flex flex-wrap laptop:justify-normal laptop:items-normal laptop:text-left items-center justify-center text-center">
          <Motion.P
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="laptop:text-3xl 4k:text-6xl text-xl tracking-widest font-bold text-zinc-300"
            style={{ textShadow: "8px 8px 10px #210342" }}
          >
            Who are we?
          </Motion.P>
          <Motion.P
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="laptop:text-2xl 4k:text-4xl text-sm laptop:mt-8 mt-4 mb-8"
          >
            At Stride, we believe in the power of progress and the journey of
            growth. Our motto, "Elevate Your Business," reflects our commitment
            to empowering entrepreneurs, resellers, and creatives to reach new
            heights in their ventures. With a range of innovative services, we
            are dedicated to providing you with the tools and resources needed
            to succeed in a dynamic marketplace.
          </Motion.P>
        </div>
        <Motion.MotionDiv className="laptop:w-full laptop:h-full w-2/3 h-2/3 pt-4 laptop:pt-0 flex items-center laptop:ml-8 col-span-1 justify-center mx-auto">
          <Shoesvg />
        </Motion.MotionDiv>
      </div>
    </Motion.MotionDiv>
  );
}