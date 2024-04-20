"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function LenisProvider({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisProvider;
