import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/8e2dfea0-e5fd-4c75-814a-f7b3df1248b0-mq50bv.webp",
  "https://utfs.io/f/0391d72d-262e-42cd-899e-388aeaf7c20f-ho0ibh.png",
  "https://utfs.io/f/3cb08f1a-7d44-4ab1-95f5-7eba141c9f6d-hcx9pf.png",
  "https://utfs.io/f/91c8751b-a4cb-4057-bfb4-ed771a8ecbae-62wodp.webp",
  "https://utfs.io/f/0ccb9b82-e468-4ccd-a0b8-ff9d0c57d3d9-4cdpo1.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.posts.findMany();
  return (
    <main className="w-full px-4 pb-20 pt-10">
      <div className="flex w-full flex-wrap justify-center gap-5">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="relative aspect-square h-80 w-80 p-2" key={image.id}>
            <Suspense fallback={<div>Loading...</div>}>
              <Image
                fill
                alt="mock"
                src={image.url}
                className="h-full w-full rounded-xl"
              />
            </Suspense>
          </div>
        ))}
      </div>
    </main>
  );
}
