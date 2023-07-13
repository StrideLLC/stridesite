"use client";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#FAFAFACD"
    strokeLinecap="round"
    {...props}
  />
);
export const MenuToggle = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div className="relative " initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{type: 'spring', stiffness: 300, damping: 10}}>
          <motion.button className="z-20 absolute top-1/2 left-0 transform -translate-y-1/2 scale-[1.5]" onClick={toggleMenu}>
            <motion.svg
              layout
              width="23"
              height="18"
              viewBox="0 0 23 18"
              animate={isOpen ? "open" : "closed"}
            >
              <Path
                d="M 2 2.5 L 20 2.5"
                className="top"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                opacity="1"
                className="middle"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              />
              <Path
                d="M 2 16.346 L 20 16.346"
                className="bottom"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </motion.svg>
          </motion.button>
          <div className="absolute z-10 ">
            <motion.div className="bg-purple-400/50 flex py-12 w-40 h-48 -ml-32 -mt-4"  initial={{opacity: 0}} animate={isOpen ? "open" : "closed"} variants={{closed: {opacity: 0, y: -100}, open: {opacity: 1, y: 0}}}>
              <ul className="">
                <li>
                  <a href="#about" className="text-white hover:text-purple-500">wip</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};
