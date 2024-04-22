import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "~/components/section/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="w-full px-4 pb-20 pt-10">
      <SignedOut>
        <div className="grid h-screen w-full place-items-center">
          <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-medium uppercase  text-transparent md:text-4xl">
            Please sign in
          </p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
