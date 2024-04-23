import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { getMyImages } from "~/server/queries";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex w-full flex-wrap justify-center gap-5">
      {images.map((image) => (
        <div
          className="relative flex aspect-square w-80 flex-col gap-2 p-2"
          key={image.id}
        >
          <Link href={`/image/${image.id}`} className="h-full w-full">
            <Image
              width={500}
              height={500}
              alt="mock"
              src={image.url}
              className="h-full w-full rounded-xl object-cover "
            />
          </Link>
          <p className="w-fit bg-gradient-to-r from-white via-blue-200 to-blue-500  bg-clip-text font-inter font-medium text-transparent hover:brightness-150">
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
        <p className="w-fit bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text py-5 font-inter text-2xl font-medium uppercase text-transparent md:text-[5vw] 2xl:text-8xl">
          No images yet,Upload!
        </p>
      </div>
    </div>
  );
};

export default Images;
