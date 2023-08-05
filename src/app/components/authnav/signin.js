'use client'

import { FaDiscord } from "react-icons/fa";

import { signIn } from "next-auth/react";

import * as Motion from "@/lib/motion"


export const SignIn = () => {
    
    const variants = {
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
        hover: {
            scale: 1.1,
            cursor: "pointer",
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 400,
            }
        }

    }
    
    return (
        <Motion.MotionDiv onClick={() => signIn('discord')} initial="hidden" whileInView="visible" viewport={{once: true}} whileHover="hover" variants={variants} className="text-white bg-purple-500/50 flex items-center laptop:p-4 p-2 rounded-xl laptop:mr-8 mr-4">
            <FaDiscord className="laptop:text-3xl text-3xl laptop:mr-2 mr-1"/>
            <button className="laptop:text-xl laptop:font-bold text-lg">Sign In</button>
        </Motion.MotionDiv>
    )
}