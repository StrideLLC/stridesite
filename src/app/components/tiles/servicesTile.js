"use client";

import * as Motion from "@/lib/motion";
import * as icons from "react-icons/ci";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";

export function ServicesTile() {
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
    <section>
      <Motion.MotionDiv 
        initial="hidden"
        whileInView="visible"
        variants={div}
        viewport={{ once: false }}
        className="flex flex-wrap justify-center items-center w-full">
        <div className="text-white text-4xl font-bold tracking-wide mb-12 rounded-lg bg-purple-900/50 px-4 py-2">
          <p>Services</p>
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
              <icons.CiImageOn />
            </div>
            <div className="text-center hover:cursor-pointer">
              <p className="xl:text-4k 4k:text-4xl text-xl">
                Logos and Artwork
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
              <icons.CiLocationOn />
            </div>
            <div className="text-center hover:cursor-pointer">
              <p className="laptop:text-4k 4k:text-4xl text-xl">
                Premium Address J1gs
              </p>
            </div>
          </Motion.MotionDiv>
        </Motion.MotionDiv>
        <Motion.MotionDiv className="text-white col-span-1 flex-col items-center h-full px-12 z-50">
          <Motion.MotionDiv
            variants={item}
            onClick={() => handleServicesClick("cashout")}
          >
            <div className="hover:cursor-pointer flex text-8xl 4k:text-9xl justify-center items-center flex-wrap">
              <icons.CiBadgeDollar />
            </div>
            <div className="text-center hover:cursor-pointer">
              <p className="laptop:text-4k 4k:text-4xl text-xl">
                Cashout Service
              </p>
            </div>
          </Motion.MotionDiv>
        </Motion.MotionDiv>
      </Motion.MotionDiv>
      <AnimatePresence>
        <div className="absolute left-20 right-20 mx-auto">
          <Motion.MotionDiv
            className="laptop:block hidden flex flex-wrap justify-center items-center logodesc bg-purple-900/50 rounded-lg w-full text-white px-8 text-2xl font-medium leading-light py-4"
            key="logo"
            animate={logoOpen ? "open" : "closed"}
            initial="closed"
            variants={variants}
          >
            <p className="xl:text-4k 4k:text-4xl text-xl" >At Stride, we understand the significance of a strong brand identity. That's why we offer logo and artwork creation services curated by hand-picked artists. Whether you're a startup looking for a unique logo or an established business seeking to refresh your brand, our talented artists will bring your vision to life with creativity and precision.</p>
          </Motion.MotionDiv>
        </div>
        <div className="absolute left-20 right-20 mx-auto">
          <Motion.MotionDiv
            key="address"
            className="laptop:block hidden flex flex-wrap justify-center items-center logodesc bg-purple-900/50 rounded-lg w-full text-white px-8 text-2xl font-medium leading-light py-4"
            animate={addressOpen ? "open" : "closed"}
            initial="closed"
            variants={variants}
          >
            <p className="xl:text-4k 4k:text-4xl text-xl">Address J1gs are customized versions of your real address designed to fool websites like Nike. By using these modified addresses, you can maintain your privacy while appearing as if you have different addresses for each transaction. At Stride, we meticulously craft and verify these J1gs, ensuring secure and confident interactions for your business. Stay ahead in the digital world with our solutions.</p>
          </Motion.MotionDiv>
        </div>
        <div className="absolute left-20 right-20 mx-auto">
          <Motion.MotionDiv
            key="cashout"
            className="laptop:block hidden flex flex-wrap justify-center items-center logodesc bg-purple-900/50 rounded-lg w-full text-white px-8 text-2xl font-medium leading-light py-4"
            animate={cashoutOpen ? "open" : "closed"}
            initial="closed"
            variants={variants}
          >
            <p className="xl:text-4k 4k:text-4xl text-xl">Looking to offload your shoe inventory quickly and efficiently? Stride's Sneaker Cashout Service is here to help. We buy all types of shoes, providing you with a hassle-free solution to free up space and capitalize on new opportunities.</p>
          </Motion.MotionDiv>
        </div>
      </AnimatePresence>
    </section>
  );
}
