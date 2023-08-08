import Link from "next/link";



export default function DashNav(){
    return(
        <div className="flex w-screen text-2xl text-white/50 font-bold mx-auto text-center justify-center gap-x-4">
            <div>
                <Link href="/dashboard">Home</Link>
            </div>
            <div>
                <Link href="/dashboard/sales">Sales</Link>
            </div>
            <div>
                <Link href="/dashboard/inventory">Inventory</Link>
            </div>
            <div>
                <Link href="/dashboard/profit">Profit Calculator</Link>
            </div>
            <div>
                <Link href="/dashboard/update">Update</Link>
            </div>
            <div>
                <Link href="/dashboard/config">Config</Link>
            </div>
        </div>
    )

}