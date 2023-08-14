import AuthNav from "../authnav/authnav";
import DashNav from "./navbar";

const Default = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex px-20 bg-purple-900/50 rounded-lg w-full items-center mt-12">
        <h1 className="text-white laptop:text-3xl font-bold text-base mr-auto">
          <div className="flex">
            <DashNav />
          </div>
        </h1>
        <AuthNav />
      </div>
    </div>
  );
};

export default Default;
