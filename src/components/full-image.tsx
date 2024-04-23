/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { cn } from "~/lib/utils";
import { getImage } from "~/server/queries";

// import {Modal} from './modal'
export default async function FullImage(props: {
  photoId: string;
  className?: HTMLDivElement["className"];
}) {
  const { photoId, className } = props;
  const image = await getImage(photoId);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  if (!image.url) return <p>Image not found</p>;
  return (
    <div className={cn(" flex min-w-0 items-start gap-5 px-4 ", className)}>
      <div className="flex flex-shrink">
        <img
          src={image.url}
          alt=""
          className="shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]x flex-shrink rounded-xl object-contain"
        />
      </div>
      <div className="lg:w-54 sticky top-5 flex w-48 flex-col gap-y-2 rounded-xl bg-black/80 px-4 py-2">
        <p className="w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-inter font-medium uppercase text-transparent">
          {image.name}
        </p>
        <div className="flex flex-col ">
          <span className="text-sm">Uploaded By</span>
          <span className="text-sm font-extralight">
            {uploaderInfo.username}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Created On </span>
          <p className="w-fit font-inter text-sm font-extralight  text-white">
            {image.createdAt.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
