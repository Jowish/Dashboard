"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const path = usePathname();

    return (
        <nav className=" flex flex-col py-2 w-56 items-center bg-[#414141]">
            <p className="font-bold p-2">Habit Tracker</p>
            <hr className="border w-full border-[#505050] my-4" />
            <Link
                className={
                    path === "/"
                        ? "bg-[#3b4f5e] w-full p-3 flex items-center"
                        : "text-white w-full p-3 flex items-center"
                }
                href="/"
            >
                <div className="px-5">
                    <Image
                        src="dashboard.svg"
                        alt="Dashboard"
                        width="25"
                        height="25"
                    />
                </div>
                Dashboard
            </Link>
            <Link
                className={
                    path === "/habits"
                        ? "bg-[#3b4f5e] w-full p-3 flex items-center"
                        : "text-white w-full p-3 flex items-center"
                }
                href="/habits"
            >
                <div className="px-5">
                    <Image
                        src="plusicon.svg"
                        alt="Plus"
                        width="25"
                        height="25"
                    />
                </div>
                Manage Habits
            </Link>
        </nav>
    );
}
