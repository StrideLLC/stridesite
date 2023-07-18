import React from "react";
import * as tiles from "./components/tiles/tiles.js";
import { scrollScript } from "@/lib/scrollscript.js";
import BackToTop from "./components/buttons/backtotop.js";

const Home = () => {

  return (
    <>
      <section className="first-section h-screen relative">
        <div className="App flex flex-row h-full">
          <div className="flex flex-col w-full">
            <div className="pl-8 pt-8">
              <tiles.logoImage />
            </div>
            <main className="flex-grow w-full max-w-[1400px] md:gap-y-5 gap-y-1 gap-x-5 grid grid-cols-8 py-6 mx-auto -mt-20">
              <div className="ghost col-span-0 md:col-span-2"></div>
              <div className="col-span-6 md:col-span-4">
                <tiles.welcomeTile />
                <tiles.WelcomeTileMobile />
              </div>
              <div className="ghost col-span-0 md:col-span-2"></div>
              <div className="ghost col-span-1"></div>
              <div className="col-span-6 pt-20">
                <tiles.aboutTile targetSelector={`.wip`} />
              </div>
              <div className="ghost col-span-1"></div>
              <div className="mt-40 ghost col-span-8"></div>
              <div className="mt-40 ghost col-span-8"></div>
              <div className="mt-40 ghost col-span-8"></div>
              <div className="mt-80 col-span-8 wip about discord contact tools">
                <tiles.WIP />
              </div>
            </main>
          </div>
        </div>
        <div className="fixed right-0 top-0 h-full md:w-80 w-screen">
          <tiles.NavBar />
        </div>
        <script {...scrollScript} />
        <BackToTop />
      </section>
    </>
  );
};

export default Home;
