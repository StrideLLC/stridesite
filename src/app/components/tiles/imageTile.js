import Link from "next/link";
import Image from "next/image";
import * as Motion from "@/lib/motion";

import * as transitions from "../transitions/transitions";

export async function ImageTile() {
    return (
      <Motion.MotionDiv
        className="laptop:w-[100px] h-[100px] w-[75px] h-[75px] laptop:ml-0 -ml-4 z-60"
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
            className="opacity-50 4k:scale-[1.5] 4k:mt-8 4k:ml-8"
          />
        </Link>
      </Motion.MotionDiv>
    );
  }