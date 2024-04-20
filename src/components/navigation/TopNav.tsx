import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const TopNav = () => {
  return (
    <nav className="font-inter flex justify-between border-b border-gray-900 px-4 py-4 text-xl font-bold md:px-8">
      <h2 className="">Gallery</h2>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
