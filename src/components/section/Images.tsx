import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();
  const user = auth();

  return (
    <div className=" max-h-full w-full columns-1 [column-gap:40px] sm:columns-2 md:columns-3 xl:columns-4 ">
      {images.map((image) => (
        <div
          className="group/link relative  flex w-full flex-col  gap-2  p-2"
          key={image.id}
        >
          <div className="group/img relative  w-full overflow-hidden">
            <Image
              width={1000}
              height={1000}
              alt="mock"
              src={image.url}
              className=" h-full max-w-full rounded-xl object-cover transition-all duration-1000 group-hover/img:scale-125 group-hover/img:duration-100"
            />
          </div>
          <Link
            href={image.userId === user.userId ? `/image/${image.id}` : ""}
            className="h-full w-full overflow-hidden rounded-xl "
          >
            <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-medium text-transparent transition-all duration-700 group-hover/link:brightness-150 group-hover/link:duration-100">
              {image.name}
            </p>
          </Link>
        </div>
      ))}
      <div
        className={cn(
          "grid h-screen w-full place-items-center transition-opacity duration-1000",
          images.length === 0
            ? "static opacity-100"
            : "pointer-events-none absolute opacity-0",
        )}
      >
        <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text py-5 text-2xl font-medium uppercase text-transparent md:text-[5vw] 2xl:text-8xl">
          No images yet,Upload!
        </p>
      </div>
    </div>
  );
};

export default Images;
