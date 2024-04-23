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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <LenisProvider>
          <body
            className={cn(
              "dark mx-auto w-full max-w-[1440px] bg-gray-950 font-inter text-white",
            )}
          >
            <Suspense fallback={<LoadingScreen />}>
              <section className="grid min-h-screen grid-rows-[auto,1fr] ">
                <TopNav />
                {children}
              </section>
              {modal}
              <div id="modal-root" />
              <Toaster />
            </Suspense>
          </body>
        </LenisProvider>
      </html>
    </ClerkProvider>
  );
}
