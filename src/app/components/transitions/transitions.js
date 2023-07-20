import { MotionDiv } from "@/lib/motion";

export const FadeInWhenVisible = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false },
        transition:{ type: "spring", stiffness: 40, damping: 10},
        variants:{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200},
        }
  }

  export const HoverScaleRotate = {
        whileHover: { scale: 1.1 },
        transition: { type: "spring", stiffness: 300, damping: 10}
  }


export const GlowFadeIn = {
        className: "rounded-xl bg-transparent",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        transition: { type: "tween", delay: 2, duration: 3, ease: "easeInOut"},
        variants: {
          visible: { boxShadow: "0px 0px 20px #f3e8ff" },
          hidden: { boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.0)"}
        }

}





