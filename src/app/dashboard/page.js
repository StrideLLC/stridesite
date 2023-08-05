import AuthNav from "../components/authnav/authnav";
import { getCurrentUser } from "@/lib/session";

import { redirect } from "next/navigation";

const Home = async() => {
    const user = await getCurrentUser();

    if(!user) {
        return redirect("/")
    }


    return (
        <div className="flex items-center px-20 bg-purple-900/50 rounded-lg mt-12">
            <h1 className="text-white laptop:text-3xl font-bold text-base mr-auto">Work in Progress.</h1>
            <AuthNav />
        </div>
    );
    }


export default Home;