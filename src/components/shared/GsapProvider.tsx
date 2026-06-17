"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register the available free plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  }, []);

  return <>{children}</>;
}
