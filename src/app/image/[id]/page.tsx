import { Suspense } from "react";
import FullImage from "~/components/full-image";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  if (!photoId) return <p>Image not found</p>;
  return (
    <Suspense fallback={<p className="text-5xl text-white">Loading...</p>}>
      <FullImage photoId={photoId} />
    </Suspense>
  );
}
