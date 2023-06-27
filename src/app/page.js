import * as tiles from './components/tiles';
import * as transitions from './components/transitions/transitions';

export default function Home() {
  return (
    <div className="App">
        <div className='pl-8'>
        <tiles.logoImage />
        </div>
        <main className="w-full max-w-[1400px] gap-y-5 gap-x-5 grid grid-cols-8 py-6 mx-auto">
          <div className="ghost col-span-2"></div>
          <div className="col-span-4">
            <transitions.FadeInWhenVisible>
              <tiles.welcomeTile />
            </transitions.FadeInWhenVisible>
          </div>
          <div className="ghost col-span-2"></div>
          <div className="ghost col-span-1"></div>
          <div className="col-span-6 pt-28">
            <transitions.FadeInWhenVisible>
              <tiles.aboutTile />
            </transitions.FadeInWhenVisible>
          </div>
          <div className="ghost col-span-1"></div>
        </main>
    </div>
  );
}
