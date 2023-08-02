"use client";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import Link from "next/link";

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
    const script = `
      const appDiv = document.querySelector('.App');
      const backtotop = document.querySelector('.backtotop');
      const navBar = document.querySelector('.navBar');
      const navContainer = document.querySelector('.navContainer');
      if (navBar.classList.contains('isOpen')) {
        navBar.classList.remove('isOpen');
      } else {
        navBar.classList.add('isOpen');
      }
      if (appDiv.classList.contains('blur')) {
        appDiv.classList.remove('blur');
      } else {
        appDiv.classList.add('blur');
      }
      if(backtotop.classList.contains('isOpen')) {
        if(window.scrollY != 0){
          backtotop.classList.remove('isOpen');
          backtotop.style.opacity = '1';
        }
      } else {
        backtotop.classList.add('isOpen');
        backtotop.style.opacity = '0';
      }
      // Check if the width of the screen is less than or equal to 768px
    if(window.innerWidth <= 768){
      // If it is, then adjust the width of the navContainer according to the isOpen state
      if(navContainer.classList.contains('z-20')) {
        navContainer.classList.remove('z-20');
      } else {
        navContainer.classList.add('z-20');
      }
    }
    `;
    window.eval(script);

  };

  const nav = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Tools",
      link: "#tools",
    },
    {
      name: "Discord »",
      link: "https://discord.gg/stridellc",
      target: "_blank",
    }
  ];

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          className="flex w-full h-full justify-end navBar"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <motion.button
            className="z-20 absolute transform -translate-y-1/2 scale-[1.5] 4k:scale-[3] mt-10 4k:mt-28 4k:mr-20 mr-6"
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
          <div className="z-10 w-full h-full relative">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="bg-[#1b032d] flex px-4 w-full py-8 h-full laptop:rounded-xl absolute"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0, transform: "translatex(100%)", filter: "blur(10px)" },
                    animate: {
                      opacity: 1,
                      transform: "translatex(0%)",
                      filter: "blur(0px)",
                      transition: {
                        when: "beforeChildren",
                        staggerChildren: 0.1,
                      },
                    },
                    exit: {
                      opacity: 0,
                      filter: "blur(10px)",
                      transform: "translatex(100%)",
                      transition: {
                        when: "afterChildren",
                        staggerChildren: 0.1,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  <ul className="text-5xl pl-4 font-bold tracking-wide laptop:mt-20 mt-8">
                    {nav.map((item, index) => (
                      <motion.li
                        className="mt-16"
                        key={index}
                        onClick={toggleMenu}
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
                        <Link
                          href={item.link}
                          {...(item.target && { target: item.target })}
                          className="text-white hover:text-purple-500"
                        >
                          {item.name}
                        </Link>
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
