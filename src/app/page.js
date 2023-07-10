import React from 'react';
import * as tiles from './components/tiles/tiles.js';

import { scrollScript } from '@/lib/scrollscript.js';

const Home = () => {
  return (
    <section className="first-section">
      <div className="App">
        <div className="pl-8 pt-8">
          <tiles.logoImage />
        </div>
        <main className="w-full max-w-[1400px] gap-y-5 gap-x-5 grid grid-cols-8 py-6 mx-auto -mt-20">
          <div className="ghost col-span-2"></div>
          <div className="col-span-4">
            <tiles.welcomeTile />
          </div>
          <div className="ghost col-span-2"></div>
          <div className="ghost col-span-1"></div>
          <div className="col-span-6 pt-20">
            <tiles.aboutTile targetSelector={`.wip`}/>
          </div>
          <div className="ghost col-span-1"></div>
          <div className="mt-40 ghost col-span-8"></div>
          <div className="mt-40 ghost col-span-8"></div>

          <div className="mt-40 ghost col-span-8"></div>


          <div className="mt-80 col-span-8 wip">
          <tiles.WIP />
        </div>
        </main>
      </div>

      <script {...scrollScript} />
    </section>
  );
};

export default Home;
