

import { SignIn } from "./signin";
import { Dropdown } from "./dropdown";

import { getCurrentUser } from "@/lib/session";


export default async function AuthNav(){
    const user = await getCurrentUser()
    if(!user){
        return <SignIn />
    }
    if(user){
        return <Dropdown user={user} />
    }
}