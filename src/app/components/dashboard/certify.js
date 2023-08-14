import { ZnaData } from "@/lib/mongo/znaRoleData";
import { DashData } from "@/lib/mongo/dashRoleData";

import { getCurrentUser } from "@/lib/session";

import Link from "next/link";
import { redirect } from "next/navigation";


export const Certify = async ({ children }) => {
  const znadata = await ZnaData();
  const dashData = await DashData();

  let worthless = false;

  const user = await getCurrentUser();
  if (!user) {
    return redirect("/");
  }

  if (
    !znadata.memberIds.includes(user.id) &&
    !dashData.memberIds.includes(user.id)
  ) {
    worthless = true
  }

  return (
    <>
    {
        worthless ? (
            (
                <div className="w-screen h-screen flex justify-center items-center">
                  <div className="mx-4">
                    <h1 className="text-3xl text-white font-bold">
                      You do not have access to this page.
                    </h1>
                    <h2 className="text-xl text-white font-bold">
                      <button className="p-2 bg-purple-900/50 mt-2 rounded-xl">
                        <Link href="/">Go Back</Link>
                      </button>
                    </h2>
                  </div>
                </div>
              )
        ) : (
            children
        )
    }       
    </>
  )

};