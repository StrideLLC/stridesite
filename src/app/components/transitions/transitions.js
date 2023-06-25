'use client';


import { motion } from "framer-motion";

export async function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 40, damping: 10}}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200}
        }}
      >
        {children}
      </motion.div>
    );
  }


export async function GlowFadeIn({ children }) {
  return(
    <motion.div
        className="rounded-xl bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "tween", delay: 2, duration: 3, ease: "easeInOut"}}
        variants={{
          visible: { boxShadow: "0px 0px 20px #f3e8ff" },
          hidden: { boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.0)"}
        }}
      >
        {children}
      </motion.div>
  )
}