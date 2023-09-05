"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { usePathname } from "next/navigation";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#FAFAFACD"
    strokeLinecap="round"
    {...props}
  />
);

export const Dropdown = (user) => {
  const pathname = usePathname();
  let isDashboard = pathname.startsWith("/dashboard") ? true : false;

  const initialVariants = {
    hidden: {
        opacity: 0,
        scale: 0.7,
        transition: {
            type: "spring",
            damping: 16,
            stiffness: 300,
        }
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 16,
            stiffness: 300,
        }
    },
  }

  const itemVariants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
    exit: {
      filter: "blur(10px)",
      opacity: 0,
      scale: 0.5,
    },
  };

  const listVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className="text-white flex flex-col laptop:p-4 p-2 laptop:mr-8 mr-4">
      <div className="flex items-center w-full p-4 bg-slate-800/50 rounded-xl ">
        <div className="relative laptop:w-10 laptop:h-10 w-8 h-8 mr-2 ">
          <Image src={user?.user?.image} fill className="rounded-full" />
        </div>
        <p className="laptop:text-xl laptop:block hidden text-white/70 mr-3">{user?.user?.name}</p>
        <motion.button className="z-20 mb-2" onClick={toggleMenu}>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 25"
            animate={isOpen ? "open" : "closed"}
          >
            <Path
              d="M 1 10 L 11 20 L 21 10"
              variants={{
                closed: { d: "M 1 10 L 11 20 L 21 10" },
                open: { d: "M 1 20 L 11 10 L 21 20" },
              }}
            />
          </motion.svg>
        </motion.button>
      </div>
      <div className="w-full relative">
        <div className="absolute laptop:text-xl text-sm text-white/50 w-full mt-1">
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                variants={listVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.li
                  className="laptop:bg-slate-800/50 bg-slate-900 py-2 laptop:px-4 px-2 rounded-xl"
                  variants={itemVariants}
                >
                  <Link href={isDashboard ? "/": "/dashboard" } replace>{`${isDashboard ? "Home": "Dashboard"}`}</Link>
                </motion.li>
                <motion.li
                  className="laptop:bg-slate-800/50 bg-slate-900 py-2 px-4 rounded-xl mt-1"
                  variants={itemVariants}
                >
                  <button className="text-red-300/50" onClick={() => signOut()}>
                    Sign Out
                  </button>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
