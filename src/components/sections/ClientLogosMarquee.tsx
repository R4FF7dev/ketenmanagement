import { useRef } from "react";
import { CLIENT_LOGOS } from "@/content/site";

export function ClientLogosMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Changing animation-duration on hover restarts/jumps the CSS animation's
  // timing calculation. Setting playbackRate on the running animation via
  // the Web Animations API instead slows it down in place, with no jump.
  const setSpeed = (rate: number) => {
    for (const animation of trackRef.current?.getAnimations() ?? []) {
      animation.playbackRate = rate;
    }
  };

  return (
    <section className="bg-surface">
      <div className="container-x">
        <div className="overflow-hidden border-x border-hairline bg-white py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            ref={trackRef}
            className="animate-marquee flex w-max items-center gap-20"
            onMouseEnter={() => setSpeed(0.15)}
            onMouseLeave={() => setSpeed(1)}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-16 w-auto shrink-0 object-contain opacity-50 transition hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
