import { getCurrentUser } from "@/lib/session";

import { ZnaData } from "@/lib/mongo/znaRoleData";
import { DashData } from "@/lib/mongo/dashRoleData";

import Link from "next/link";

import Default from "../../components/dashboard/default";

const Home = async () => {
  const znadata = await ZnaData();
  const dashData = await DashData();

  const user = await getCurrentUser();
  if (!user) {
    return redirect("/");
  }

  if (
    !znadata.memberIds.includes(user.id) &&
    !dashData.memberIds.includes(user.id)
  ) {
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
   <Default />
  );
};

export default Home;
