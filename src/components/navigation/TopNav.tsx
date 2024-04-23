"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { toast } from "sonner";
import { UploadButton } from "~/lib/utils";

const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between border-b border-gray-900 px-4 py-4 font-inter text-xl font-bold md:px-8">
      <Link href={"/"} className="">
        Gallery
      </Link>
      <div>
        <SignedOut>
          <Suspense fallback={<div>Loading...</div>}>
            <SignInButton />
          </Suspense>
        </SignedOut>

        <SignedIn>
          <div className="flex items-start gap-x-2 lg:gap-x-4">
            <UploadButton
              endpoint="imageUploader"
              onUploadBegin={() => {
                toast("Uploading...", {
                  duration: 100000,
                  id: "upload-start",
                });
              }}
              onClientUploadComplete={() => {
                toast.dismiss("upload-start");
                toast("Upload Complete!", {
                  duration: 2000,
                  id: "upload-complete",
                });
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
