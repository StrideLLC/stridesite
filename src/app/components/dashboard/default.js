import AuthNav from "../authnav/authnav";
import DashNav from "./navbar";

const Default = () => {
  return (
    <>
      <div className="flex w-full flex-wrap justify-center">
        <div className="flex px-8 bg-purple-900/50 w-full items-center">
          <h1 className="text-white laptop:text-3xl font-bold text-base mr-auto">
            <div className="flex whitespace-nowrap">
              <DashNav />
            </div>
          </h1>
          <AuthNav />
        </div>
      </div>
    </>
  );
};

export default Default;
