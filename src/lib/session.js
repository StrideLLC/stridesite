
import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  if(!session){
    return null
  }

  const id = session?.user?.image?.split('/')[4]?.split('.')[0]
  session.user.id = id
  return session?.user
}