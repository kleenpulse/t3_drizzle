import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main className="w-full px-4 pb-20 pt-10">
      <div className="flex w-full flex-wrap justify-center gap-5">
        <Suspense fallback={<div>Loading...</div>}>
          {[...images, ...images, ...images].map((image) => (
            <div
              className="relative flex aspect-square w-80 flex-col gap-2 p-2"
              key={image.id}
            >
              <Image
                width={500}
                height={500}
                alt="mock"
                src={image.url}
                className="h-full w-full rounded-xl"
              />
              <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-medium text-transparent">
                {image.name}
              </p>
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
}
