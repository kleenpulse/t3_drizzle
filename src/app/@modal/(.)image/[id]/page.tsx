import { Suspense } from "react";
import PortalModal from "./modal";
import FullImage from "~/components/full-image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  if (!photoId) return <p>Image not found</p>;
  return (
    <Suspense fallback={<p className="text-5xl text-white">Loading...</p>}>
      <PortalModal>
        <FullImage photoId={photoId} />
      </PortalModal>
    </Suspense>
  );
}
