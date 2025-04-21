"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";
import { useSession } from "next-auth/react";
import LogoutDialog from "./logoutDialog";
import { useEffect, useState } from "react";

export default function Navbar() {
    const path = usePathname();
    const { data: session } = useSession();

    const [bool, setBool] = useState<boolean>(false);

    useEffect(() => {
        if (session) setBool(true);
        else setBool(false);
    }, [session]);

    return (
        <Sidebar>
            <SidebarHeader>
                <span className="text-2xl font-bold">Habit Tracker</span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                {path === "/dashboard" ? (
                                    <SidebarMenuButton
                                        asChild
                                        isActive
                                        className="p-4"
                                    >
                                        <Link href="/dashboard" className="p-4">
                                            Dashboard
                                        </Link>
                                    </SidebarMenuButton>
                                ) : (
                                    <SidebarMenuButton asChild>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                {path === "/manage" ? (
                                    <SidebarMenuButton
                                        asChild
                                        isActive
                                        className="p-4"
                                    >
                                        <Link href="/manage" className="p-4">
                                            Manage Habits
                                        </Link>
                                    </SidebarMenuButton>
                                ) : (
                                    <SidebarMenuButton asChild>
                                        <Link href="/manage">
                                            Manage Habits
                                        </Link>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {bool && (
                        <SidebarMenuItem>
                            <LogoutDialog />
                        </SidebarMenuItem>
                    )}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
