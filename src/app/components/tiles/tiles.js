import { ImageTile } from "./imageTile";
import { StrideText, StrideTextMobile, XLStrideText } from "./stridetext";
import { NavBarDesktop } from "./navigation";
import AboutTileClient from "./subTitleTile";
import { ServicesTile } from "./servicesTile";
import AboutTile from "./aboutTile";
import ToolsTile from "./toolsTile";
import FooterTile from "./footerTile"

import * as icons from "react-icons/ci";

export async function logoImage() {
  return <ImageTile />;
}

export async function NavBar() {
  return <NavBarDesktop />;
}

export async function welcomeTile() {
  return <StrideText />;
}

export async function WelcomeTileMobile() {
  return <StrideTextMobile />;
}

export async function WelcomeTileXL() {
  return <XLStrideText />;
}

export async function aboutTile() {
  return <AboutTileClient />;
}



export async function AboutUs() {
  return <AboutTile />;
}

export async function Tools() {
  return(
    <ToolsTile />
  )
}

export async function Services() {
  return(
    <ServicesTile />
  )
}


export async function WIP() {
  return (
    <div className="bg-purple-900/10 w-full h-full rounded-xl py-10 justify-center items-center flex flex-wrap">
      <div className="text-white/70 tracking-widest">
        <p className="text-4k"> This page is currently under construction.</p>
      </div>
    </div>
  );
}


export async function Footer(){
  return <FooterTile />;
}
