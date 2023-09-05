'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Motion from "@/lib/motion";

export default function DashNav(){
    const path = usePathname();
    const links = [
        { href: '/dashboard', label: 'Home' },
        { href: '/dashboard/sales', label: 'Sales' },
        { href: '/dashboard/inventory', label: 'Inventory' },
        { href: '/dashboard/profit', label: 'Profit Calculator' },
        { href: '/dashboard/update', label: 'Update' },
        { href: '/dashboard/config', label: 'Config' },

    ]
    return(
        <div className="flex w-full laptop:text-2xl text-lg text-white/50 font-bold">
            <ul className="flex [&_li]:m-4 ml-12">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="relative">
                            {path === link.href && (
                                <Motion.Span layoutId="underline" className="absolute left-0 top-full block h-[2px] w-full bg-white/50"></Motion.Span>
                            )}
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}