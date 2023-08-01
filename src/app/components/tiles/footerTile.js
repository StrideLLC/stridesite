import Image from "next/image";
import Link from "next/link";
import * as icons from "react-icons/fa";
import * as Motion from "@/lib/motion";

export default function FooterTile() {
  const hoverVariant = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const footerLoadVariant = {
    hidden: {
      opacity: 0,
      y: -50,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full justify-center flex">
      <Motion.MotionDiv
        variants={footerLoadVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="absolute laptop:w-7/12 w-10/12 laptop:-mt-20 -mt-12 bg-gradient-to-br rounded-lg from-violet-500/80 via-purple-700/80 to-purple-950/80 flex laptop:px-16 laptop:py-12 px-6 py-4"
      >
        <div className="flex-col mr-auto my-auto text-white laptop:text-3xl text-lg font-bold">
          <p>Join our Community.</p>
          <p className="laptop:text-base text-sm font-normal">
            Elevate • Your • Business
          </p>
        </div>
        <Motion.MotionDiv
          whileHover="hover"
          variants={hoverVariant}
          className="flex justify-center items-center laptop:text-2xl text-sm text-white font-bold"
        >
          <Link href="https://discord.gg/stridellc" target="_blank">
            <button className="p-2 bg-indigo-600 rounded-xl whitespace-nowrap ">
              Discord ↗
            </button>
          </Link>
        </Motion.MotionDiv>
      </Motion.MotionDiv>
      <div className="bludenheimer grid laptop:grid-cols-8 grid-cols-2 w-full laptop:gap-8 gap-4 laptop:pt-44 pt-28 pb-12 laptop:px-20 px-2 bg-[#12001a]/50">
        <div className="flex flex-wrap laptop:block hidden justify-center items-center laptop:col-span-2">
          <div className="laptop:w-40 laptop:h-40 w-24 h-24 shrink-0 relative">
            <Image src="/stridelogo123.png" fill/>
          </div>
        </div>
        <div className="laptop:block hidden mx-auto flex flex-col text-white laptop:col-span-2 laptop:text-left text-center">
          <div className="mb-8">
            <p className="text-gray-400 tracking-wide laptop:text-lg text-sm whitespace-none">
              PAGE LAYOUT
            </p>
          </div>
          <div className="space-y-2 text-sm laptop:text-base text-white/70 flex flex-col">
            <Link href="#top">Top</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#tools">Tools</Link>
          </div>
        </div>
        <div className="mx-auto flex flex-col text-white laptop:col-span-2 laptop:text-left">
          <div className="mb-8">
            <p className="text-gray-400 tracking-wide laptop:text-lg text-sm">
              CONTACT US
            </p>
          </div>
          <div className="space-y-2 text-sm laptop:text-base text-white/70 flex flex-col">
            <Link href="mailto:contact@stride.llc" target="_blank">
              Email ↗
            </Link>
            <Link href="https://discord.gg/stridellc" target="_blank">
              Discord ↗
            </Link>
          </div>
        </div>
        <div className="mx-auto flex flex-col text-white laptop:cols-span-2 laptop:text-left">
          <div className="mb-8">
            <p className="text-gray-400 tracking-wide laptop:text-lg text-sm">
              SOCIALS
            </p>
          </div>
          <div className="space-y-2 text-sm laptop:text-base text-white/70 flex flex-col laptop:text-left">
            <Link href="https://www.instagram.com/stridesneaks/" target="_blank">
              Instagram ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
