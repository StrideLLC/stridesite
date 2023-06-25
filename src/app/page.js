import * as tiles from './components/tiles';
import * as transitions from './components/transitions/transitions';

export default function Home() {
  return (
    <div className="App">
        <div className='pl-8'>
        <tiles.logoImage />
        </div>
        <main className="w-full max-w-[700px] gap-y-5 gap-x-5 grid grid-cols-4 py-6 mx-auto">
          <div className="col-span-4">
            <transitions.FadeInWhenVisible>
              <tiles.welcomeTile />
            </transitions.FadeInWhenVisible>
          </div>
          <div className="col-span-4 pt-28">
            <transitions.FadeInWhenVisible>
              <tiles.WIP />
            </transitions.FadeInWhenVisible>
          </div>
        </main>
    </div>
  );
}
