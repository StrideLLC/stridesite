"use client";

import * as Motion from "@/lib/motion";
import * as icons from "react-icons/ci";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";

export default function ToolsTile() {
  const variants = {
    open: { opacity: 1},
    closed: { opacity: 0},
  };
  const div = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        delayChildren: 0,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 35,
      },
    },
    hidden: {
      opacity: 0,
      y: -30,
    },
  };

  const [logoOpen, setLogoIsOpen] = useState(false);
  const [addressOpen, setAddressIsOpen] = useState(false);
  const [cashoutOpen, setCashoutIsOpen] = useState(false);

  function handleServicesClick(ref) {
    if (ref === "logo") {
      setLogoIsOpen(!logoOpen);
      setAddressIsOpen(false);
      setCashoutIsOpen(false);
    }
    if (ref === "address") {
      setAddressIsOpen(!addressOpen);
      setLogoIsOpen(false);
      setCashoutIsOpen(false);
    }
    if (ref === "cashout") {
      setCashoutIsOpen(!cashoutOpen);
      setLogoIsOpen(false);
      setAddressIsOpen(false);
    }
  }

  return (
    <section className="">
      <Motion.MotionDiv 
        initial="hidden"
        whileInView="visible"
        variants={div}
        viewport={{ once: false }}
      className="flex flex-wrap justify-center items-center w-full">
        <div className="text-white text-4xl font-bold tracking-wide mb-12 rounded-lg bg-purple-900/50 px-4 py-2">
          <p>Tools</p>
        </div>
      </Motion.MotionDiv>
      <Motion.MotionDiv
        initial="hidden"
        whileInView="visible"
        variants={div}
        viewport={{ once: false }}
        className="mb-12 mx-auto flex flex-wrap justify-center items-center grid laptop:grid-cols-3 laptop:divide-x grid-cols-1 "
      >
        <Motion.MotionDiv className="logo text-white col-span-1 flex-wrap flex-col items-center m-auto h-full px-12 laptop:my-0 my-8">
          <Motion.MotionDiv
            variants={item}
            onClick={() => handleServicesClick("logo")}
          >
            <div className="flex text-8xl 4k:text-9xl hover:cursor-pointer justify-center items-center flex-wrap">
              <icons.CiSearch />
            </div>
            <div className="text-center hover:cursor-pointer">
              <p className="xl:text-4k 4k:text-4xl text-xl">
                StockX Search
              </p>
            </div>
          </Motion.MotionDiv>
        </Motion.MotionDiv>
        <Motion.MotionDiv className="text-white col-span-1 flex-wrap flex-col items-center h-full px-12 laptop:my-0 my-8">
          <Motion.MotionDiv
            variants={item}
            onClick={() => handleServicesClick("address")}
          >
            <div className="hover:cursor-pointer flex text-8xl 4k:text-9xl justify-center items-center flex-wrap">
              <icons.CiCalculator2 />
            </div>
            <div className="text-center hover:cursor-pointer">
              <p className="laptop:text-4k 4k:text-4xl text-xl">
                Payout Calculator
              </p>
            </div>
          </Motion.MotionDiv>
        </Motion.MotionDiv>
        <Motion.MotionDiv className="text-white col-span-1 flex-col items-center h-full laptop:z-10 ">
          <Motion.MotionDiv
            variants={item}
            onClick={() => handleServicesClick("cashout")}
          >
            <div className="hover:cursor-pointer flex text-8xl 4k:text-9xl justify-center items-center flex-wrap">
              <icons.CiViewTimeline />
            </div>
            <div className="text-center hover:cursor-pointer">
              <p className="laptop:text-4k 4k:text-4xl text-xl">
                Botting Profiles Generator
              </p>
            </div>
          </Motion.MotionDiv>
        </Motion.MotionDiv>
      </Motion.MotionDiv>
      <AnimatePresence>
        <div className="absolute left-0 right-0 mx-auto">
          <Motion.MotionDiv
            className="laptop:block hidden flex flex-wrap justify-center items-center logodesc bg-purple-900/50 rounded-lg w-full text-white px-8 text-2xl font-medium leading-light py-4"
            key="logo"
            animate={logoOpen ? "open" : "closed"}
            initial="closed"
            variants={variants}
          >
            <p>Uncover vital data instantly! Our user-friendly StockX Searching Tool retrieves all listings, displaying lowest ask, bid, and last sale info for each size. Stay informed, optimize pricing, and elevate your reselling success! Try it now!</p>
          </Motion.MotionDiv>
        </div>
        <div className="absolute left-0 right-0 mx-auto">
          <Motion.MotionDiv
            key="address"
            className="laptop:block hidden flex flex-wrap justify-center items-center logodesc bg-purple-900/50 rounded-lg w-full text-white px-8 text-2xl font-medium leading-light py-4"
            animate={addressOpen ? "open" : "closed"}
            initial="closed"
            variants={variants}
          >
            <p>Maximize your profits with our Payout Calculator! Simply input the shoe's value, and instantly discover the potential payouts on various reselling platforms like StockX, eBay, and more. Unleash the power of data-driven decisions to optimize your reselling strategy. Start calculating your earnings now!</p>
          </Motion.MotionDiv>
        </div>
        <div className="absolute left-0 right-0 mx-auto">
          <Motion.MotionDiv
            key="cashout"
            className="laptop:block hidden flex flex-wrap justify-center items-center logodesc bg-purple-900/50 rounded-lg w-full text-white px-8 text-2xl font-medium leading-light py-4"
            animate={cashoutOpen ? "open" : "closed"}
            initial="closed"
            variants={variants}
          >
            <p>Streamline your sneaker botting experience with our cutting-edge Profile Converter! Effortlessly transform your viewable CSV files into bot-ready .json profiles and vice versa. Seamlessly enter and use your profiles in the bot of your choice. Make adjustments on-the-fly within the bot and convert back to CSV effortlessly.</p>
          </Motion.MotionDiv>
        </div>
      </AnimatePresence>
    </section>
  );
}
