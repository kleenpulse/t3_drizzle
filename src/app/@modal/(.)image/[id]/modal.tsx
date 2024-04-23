"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PortalModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="gridx relative h-screen w-full  place-items-start bg-black/50 text-white"
    >
      {children}
      <button onClick={onDismiss} className="absolute left-10 top-6">
        Close
      </button>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
