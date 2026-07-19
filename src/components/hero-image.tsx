import { heroMedia } from "@/data/media";

const heroBase = "/images/processed/hero/raft-exterior";

export function HeroImage() {
  return (
    <div
      className="absolute inset-0 bg-charcoal bg-cover bg-center"
      style={{
        backgroundImage: `image-set(url("${heroBase}-828.avif") type("image/avif"), url("${heroBase}-828.webp") type("image/webp"))`,
      }}
      role="img"
      aria-label={heroMedia.alt}
    />
  );
}
