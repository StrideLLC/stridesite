'use client';


import { motion } from "framer-motion";

export async function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 10}}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200}
        }}
      >
        {children}
      </motion.div>
    );
  }