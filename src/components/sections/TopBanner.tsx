import banner from "@/assets/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.avif";

export function TopBanner() {
  return (
    <div className="relative w-full">
      <img
        src={banner}
        alt="Kantoor met uitzicht over de stad"
        width={3158}
        height={624}
        className="h-auto w-full object-cover"
      />
      {/* Guarantees a legible backdrop for the hero content that overlaps the
          bottom of this banner, regardless of what the photo shows there. */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep/80 to-transparent"
        aria-hidden
      />
    </div>
  );
}
