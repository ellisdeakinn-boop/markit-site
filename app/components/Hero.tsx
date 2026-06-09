import MagneticButton from "./MagneticButton";

// Drop a video file at /public/hero.mp4 (and optionally /public/hero-poster.jpg)
// and the hero will autoplay it full-bleed under the headline.
const VIDEO_SRC = "/hero.mp4";
const POSTER_SRC = "/hero-poster.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-foreground text-white border-b-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f10] via-[#1c1c20] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        poster={POSTER_SRC}
        className="absolute inset-0 w-full h-full object-cover"
        {...({
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
        } as React.HTMLAttributes<HTMLVideoElement>)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="mx-auto w-full max-w-[1480px] px-6 lg:px-10 pt-28 lg:pt-32 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/70">
            Beyond Marketing
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/70 hidden sm:inline">
            Arizona / In-house Studio
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center text-center md:items-start md:text-left mx-auto w-full max-w-[1480px] px-6 lg:px-10 pb-16 lg:pb-20">
          <h1 className="fade-up max-w-[680px] font-serif uppercase text-[18px] leading-[1.15] tracking-[-0.01em] sm:text-[22px] md:text-[28px] lg:text-[34px] text-white">
            We build the marketing engine local businesses use to print leads,
            fill calendars, and book walk-ins.
          </h1>

          <div className="mt-6 lg:mt-8">
            <MagneticButton
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-5 py-3 text-sm hover:opacity-90"
            >
              Work with us
              <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-5 lg:bottom-6 flex items-center justify-between mx-auto max-w-[1480px] px-6 lg:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/50">
            Fig. 01
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/50 flex items-center gap-2">
            Scroll to view more
            <span aria-hidden>↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
