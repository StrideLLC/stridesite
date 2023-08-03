"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white flex flex-col laptop:p-4 p-2 laptop:mr-8 mr-4">
      <div className='flex items-center w-full p-4 bg-slate-800/50 rounded-xl '>
        <div className='relative w-10 h-10 mr-2'>
            <Image src={user?.user?.image} fill className='rounded-full' />
        </div>
        <p className="text-xl mr-3">{user?.user?.name}</p>
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
                closed: { d: "M 1 20 L 11 10 L 21 20" },
                open: { d: "M 1 10 L 11 20 L 21 10" },
              }}
            />
          </motion.svg>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute mt-20 text-2xl"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
          >
            <motion.li className='bg-slate-800/50 p-4'>
                <Link href="/">Dashboard</Link>
            </motion.li>
            <motion.li className='bg-slate-800/50 p-4'>
                <button onClick={() => signOut()}>Sign Out</button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
