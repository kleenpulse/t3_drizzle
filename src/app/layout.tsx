import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import LenisProvider from "~/components/LenisProvider";
import TopNav from "~/components/navigation/TopNav";
import { Suspense } from "react";
import LoadingScreen from "~/components/welcome/LoadingScreen";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Gallery",
  description: "My Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("relative w-full", inter.variable)}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <LenisProvider>
          <body
            className={cn(
              "font-inter dark mx-auto w-full max-w-[1440px] overflow-y-scroll bg-gray-950 text-white",
            )}
          >
            <Suspense fallback={<LoadingScreen />}>
              <section className="flex h-full w-full flex-col overflow-y-scroll ">
                <TopNav />
                {children}
              </section>

              <Toaster />
            </Suspense>
          </body>
        </LenisProvider>
      </html>
    </ClerkProvider>
  );
}
