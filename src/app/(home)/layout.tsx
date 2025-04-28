import Navbar from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex h-screen">
            <SessionProvider>
                <SidebarProvider>
                    <Navbar />
                    <main className="flex-1 flex justify-center">
                        {children}
                    </main>
                </SidebarProvider>
            </SessionProvider>
        </div>
    );
}
