"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { UploadButton } from "~/lib/utils";

const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between border-b border-gray-900 px-4 py-4 font-inter text-xl font-bold md:px-8">
      <h2 className="">Gallery</h2>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <div className="flex items-start gap-x-2 lg:gap-x-4">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
