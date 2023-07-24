'use client'

import * as Motion from "@/lib/motion"
import * as icons from "react-icons/ci"

export function ServicesTile() {
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
    
      function handleServicesClick(target) {
      }
      return (
        <Motion.MotionDiv
          initial="hidden"
          whileInView="visible"
          variants={div}
          viewport={{ once: false }}
          className="mt-32 mb-32 mx-auto flex flex-wrap justify-center items-center grid md:grid-cols-3 md:divide-x grid-cols-1 "
        >
          <Motion.MotionDiv className="logo text-white col-span-1 flex-wrap flex-col items-center m-auto h-full px-12 md:my-0 my-8">
            <Motion.MotionDiv variants={item} onClick={handleServicesClick("logo")}>
              <div className="flex text-8xl 2xl:text-9xl hover:cursor-pointer justify-center items-center flex-wrap">
                <icons.CiApple />
              </div>
              <div className="text-center hover:cursor-pointer">
                <p className="md:text-2xl 2xl:text-4xl text-xl">Logo and artwork</p>
              </div>
            </Motion.MotionDiv>
          </Motion.MotionDiv>
          <Motion.MotionDiv className="text-white col-span-1 flex-wrap flex-col items-center h-full px-12 md:my-0 my-8">
            <Motion.MotionDiv variants={item}>
              <div className="hover:cursor-pointer flex text-8xl 2xl:text-9xl justify-center items-center flex-wrap">
                <icons.CiBarcode />
              </div>
              <div className="text-center hover:cursor-pointer">
                <p className="md:text-2xl 2xl:text-4xl text-xl">Address J1g Services</p>
              </div>
            </Motion.MotionDiv>
          </Motion.MotionDiv>
          <Motion.MotionDiv className="text-white col-span-1 flex-col items-center h-full px-12 z-50">
            <Motion.MotionDiv variants={item}>
              <div className="hover:cursor-pointer flex text-8xl 2xl:text-9xl justify-center items-center flex-wrap">
                <icons.CiMoneyBill />
              </div>
              <div className="text-center hover:cursor-pointer">
                <p className="md:text-2xl 2xl:text-4xl text-xl">Cashout Service</p>
              </div>
            </Motion.MotionDiv>
          </Motion.MotionDiv>
        </Motion.MotionDiv>
      );
}