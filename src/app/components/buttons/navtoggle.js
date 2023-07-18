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

  const nav = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "tools",
      link: "#projects",
    },
  ];

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          className="relative "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <motion.button
            className="z-20 absolute top-1/2 left-0 transform -translate-y-1/2 scale-[1.5]"
            onClick={toggleMenu}
          >
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
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="md:bg-purple-400/50 bg-purple-500 flex py-12 md:w-52 md:h-48 w-screen -ml-[20.5rem] h-56  md:-ml-44 md:-mt-6  -mt-8 rounded-xl"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0, y: -100, filter: "blur(10px)" },
                    animate: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        when: "beforeChildren",
                        staggerChildren: 0.1,
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -100,
                      filter: "blur(10px)",
                      transition: {
                        when: "afterChildren",
                        staggerChildren: 0.1,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  <ul className="text-2xl ml-4 font-bold">
                    {nav.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={{
                          initial: {
                            opacity: 0,
                            filter: "blur(10px)",
                            transform: "scale(0.5)",
                          },
                          animate: {
                            opacity: 1,
                            filter: "blur(0px)",
                            transform: "scale(1)",
                            transition: { delay: 0.1 * index },
                          },
                          exit: {
                            filter: "blur(10px)",
                            opacity: 0,
                            transform: "scale(0.5)",
                          },
                        }}
                      >
                        <a
                          href={item.link}
                          className="text-white hover:text-purple-500"
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};
