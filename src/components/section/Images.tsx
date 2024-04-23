import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();
  const user = auth();

  return (
    <div className="flex w-full flex-wrap justify-center gap-5">
      {images.map((image) => (
        <div
          className="group/img relative  flex w-80 flex-col  gap-2  p-2"
          key={image.id}
        >
          <Link
            href={image.userId === user.userId ? `/image/${image.id}` : ""}
            className="h-full w-full overflow-hidden rounded-xl "
          >
            <Image
              width={500}
              height={500}
              alt="mock"
              src={image.url}
              className=" h-full w-full rounded-xl object-cover transition-all duration-1000 group-hover/img:scale-125 group-hover/img:duration-100"
            />
          </Link>
          <p className="font-inter w-fit bg-gradient-to-r from-white via-blue-200  to-blue-500 bg-clip-text font-medium text-transparent transition-all duration-700 group-hover/img:brightness-150 group-hover/img:duration-100">
            {image.name}
          </p>
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
