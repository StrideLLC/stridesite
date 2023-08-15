import AuthNav from "../authnav/authnav";
import DashNav from "./navbar";

const Default = () => {
  return (
    <>
      <div className="flex w-full flex-wrap justify-center">
        <div className="flex px-20 bg-purple-900/50 w-full items-center">
          <h1 className="text-white laptop:text-3xl font-bold text-base mr-auto">
            <div className="flex">
              <DashNav />
            </div>
          </h1>
          <AuthNav />
        </div>
      </div>
      <div className="relative h-screen w-ful">
        <div className="absolute h-16 w-full border-b-2 border-purple-600" />
        <div className="absolute w-16 h-full border-r-4 border-purple-800" />
      </div>
    </>
  );
};

export default Default;
