import Navbar from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <SessionProvider>
                <SidebarProvider>
                    <Navbar />
                    {children}
                </SidebarProvider>
            </SessionProvider>
        </div>
    );
}
