import React from "react";
import * as tiles from "./components/tiles/tiles.js";
import { scrollScript } from "@/lib/scrollscript.js";
import BackToTop from "./components/buttons/backtotop.js";

const Home = () => {

  return (
    <>
      <section className="first-section relative">
        <div className="App flex flex-row h-full">
          <div className="flex flex-col w-full">
            <div className="pl-8 pt-8">
              <tiles.logoImage />
            </div>
            <main className="2xl:bg-purple-950/10 flex-grow w-full 2xl:max-w-[2000px] max-w-[1400px] md:gap-y-5 gap-y-1 gap-x-5 grid grid-cols-8 py-6 mx-auto -mt-20">
              <div className="ghost col-span-0 md:col-span-2"></div>
              <div className="col-span-6 2xl:mt-20 md:col-span-4">
                <tiles.welcomeTile />
                <tiles.WelcomeTileMobile />
                <tiles.WelcomeTileXL />
              </div>
              <div className="ghost col-span-0 md:col-span-2"></div>
              <div className="ghost col-span-1"></div>
              <div className="col-span-6 mt-20 2xl:mt-40">
                <tiles.aboutTile/>
              </div>
              <div className="ghost col-span-1"></div>
              <div id='about' className="md:mt-80 mt-40 2xl:mt-[50rem] col-span-8 about">
                <tiles.AboutUs />
              </div>
              <div id='services' className="col-span-8 services">
                <tiles.Services />
              </div>
            </main>
          </div>
        </div>
        <div className="fixed right-0 top-0 h-full md:w-80 w-screen z-0 navContainer">
          <tiles.NavBar />
        </div>
        <BackToTop />
        <script {...scrollScript} />
      </section>
    </>
  );
};

export default Home;
