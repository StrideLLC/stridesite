import AuthNav from "../components/authnav/authnav";
import { getCurrentUser } from "@/lib/session";

import { redirect } from "next/navigation";
import { ZnaData } from "@/lib/mongo/znaRoleData";
import { DashData } from "@/lib/mongo/dashRoleData";

import Link from "next/link";

const Home = async () => {
  const znadata = await ZnaData();
  const dashData = await DashData();

  const user = await getCurrentUser();
  if (!user) {
    return redirect("/");
  }

  if (!znadata.memberIds.includes(user.id) && !dashData.memberIds.includes(user.id)) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div classname="flex flex-wrap items-center justify-center  w-full">
          <h1 className="w-full text-3xl text-white font-bold">
            You do not have access to this page.
          </h1>
          <h2 className="w-full text-xl text-white font-bold">
            <button className="p-2 bg-purple-900/50 mt-2 rounded-xl">
              <Link href="/">Go Back</Link>
            </button>
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center px-20 bg-purple-900/50 rounded-lg mt-12">
      <h1 className="text-white laptop:text-3xl font-bold text-base mr-auto">
        Work in Progress.
      </h1>
      <AuthNav />
    </div>
  );
};

export default Home;
