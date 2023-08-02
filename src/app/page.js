import React from "react";
import * as tiles from "./components/tiles/tiles.js";
import { scrollScript } from "@/lib/scrollscript.js";
import BackToTop from "./components/buttons/backtotop.js";

import Script from "next/script";

const Home = () => {
  return (
    <>
        <section className="first-section relative">
          <div className="App flex flex-row h-full">
            <div className="flex flex-col w-full">
              <div id="top" className="pl-8 laptop:pt-6 pt-4">
                <tiles.logoImage />
              </div>
              <main className="4k:bg-purple-950/10 flex-grow w-full 4k:max-w-[2000px] max-w-[1400px] laptop:gap-y-5 gap-y-1 gap-x-5 grid grid-cols-8 py-6 mx-auto -mt-20">
                <div className="ghost col-span-0 laptop:col-span-2"></div>
                <div className="col-span-6 4k:mt-20 laptop:col-span-4">
                  <tiles.welcomeTile />
                  <tiles.WelcomeTileMobile />
                  <tiles.WelcomeTileXL />
                </div>
                <div className="ghost col-span-0 laptop:col-span-2"></div>
                <div className="ghost col-span-1"></div>
                <div className="col-span-6 mt-20 4k:mt-40">
                  <tiles.aboutTile />
                </div>
                <div className="ghost col-span-1"></div>
                <div
                  id="about"
                  className="laptop:mt-80 mt-40 4k:mt-96 col-span-8 about"
                >
                  <tiles.AboutUs />
                </div>
                <div id="services" className="col-span-8 services mb-20 mt-32">
                  <tiles.Services />
                </div>
                <div className="col-span-8 bg-white/60 h-px mt-10" style={{}} />
                <div id="tools" className="col-span-8 services mt-30 mb-52">
                  <tiles.Tools />
                </div>
              </main>
              <div className="footer w-full z-30">
                <tiles.Footer />
              </div>
            </div>
          </div>
          <div className="fixed right-0 top-0 h-full laptop:w-80 w-screen z-0 navContainer">
            <tiles.NavBar />
          </div>

          <BackToTop />
          <Script {...scrollScript} />
        </section>
    </>
  );
};

export default Home;
