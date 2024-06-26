/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { cn } from "~/lib/utils";
import { deleteImage, getImage } from "~/server/queries";

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
    <div
      className={cn(
        " flex min-w-0 flex-col items-center gap-5 px-4 min-[500px]:flex-row min-[500px]:items-start ",
        className,
      )}
    >
      <div className="flex flex-shrink">
        <img
          src={image.url}
          alt=""
          className="shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]x flex-shrink rounded-xl object-contain"
        />
      </div>
      <div className="lg:w-54 sticky top-5 flex w-full flex-shrink-0 flex-col gap-y-2 rounded-xl bg-black/80 px-4 py-2 min-[500px]:w-48">
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
        <div className="flex w-full justify-start">
          <form
            action={async () => {
              "use server";
              await deleteImage(image.id);
            }}
            className="w-full"
          >
            <button
              type="submit"
              className="flex  w-full justify-center rounded-sm border border-red-500 bg-red-500/20 px-2 py-1 text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-500/30 active:scale-95"
            >
              <span>Delete</span>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
