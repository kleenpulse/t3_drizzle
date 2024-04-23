import Image from "next/image";
import { Suspense } from "react";
import { getImage } from "~/server/queries";

// import {Modal} from './modal'
export default async function FullImage(props: { photoId: string }) {
  const { photoId } = props;
  const image = await getImage(photoId);

  if (!image.url) return <p>Image not found</p>;
  return (
    <Suspense fallback={<p className="text-5xl text-white">Loading...</p>}>
      <div className=" grid place-items-center">
        <Image
          src={image.url}
          alt={image.name}
          width={600}
          height={600}
          className="rounded-xl shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"
        />
      </div>
    </Suspense>
  );
}
