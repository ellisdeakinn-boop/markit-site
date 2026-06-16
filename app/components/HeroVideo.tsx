"use client";

import { useEffect, useState } from "react";

const DESKTOP_SRC = "/hero.mp4";
const MOBILE_SRC = "/hero-mobile.mp4";
const POSTER_SRC = "/hero-poster.jpg";

export function HeroVideo() {
  const [src, setSrc] = useState(DESKTOP_SRC);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const pick = () => setSrc(mql.matches ? MOBILE_SRC : DESKTOP_SRC);
    pick();
    mql.addEventListener("change", pick);
    return () => mql.removeEventListener("change", pick);
  }, []);

  return (
    <video
      key={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      controls={false}
      disablePictureInPicture
      poster={POSTER_SRC}
      className="absolute inset-0 w-full h-full object-cover"
      {...({
        "webkit-playsinline": "true",
        "x5-playsinline": "true",
      } as React.HTMLAttributes<HTMLVideoElement>)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
