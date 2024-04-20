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
        {[...images, ...images, ...images].map((image) => (
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
