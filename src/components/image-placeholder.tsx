import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { MediaItem } from "@/data/media";
import type { SiteImageData } from "@/data/images";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="image-placeholder__sun" aria-hidden="true" />
      <span className="image-placeholder__mountain" aria-hidden="true" />
      <span className="image-placeholder__wave" aria-hidden="true" />
      <span className="image-placeholder__label">
        <ImageIcon size={18} aria-hidden="true" />
        {label}
      </span>
    </div>
  );
}

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
};

export function SiteImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  loading,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SiteImageProps) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : loading ?? "lazy"}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />
    </figure>
  );
}

export function MediaImage({
  media,
  className = "",
  imageClassName = "",
  priority,
  loading,
  sizes,
}: {
  media: MediaItem | SiteImageData;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
}) {
  const src =
    "fallbackSrc" in media && media.fallbackSrc
      ? media.src
      : media.src;

  return (
    <SiteImage
      src={src}
      alt={media.alt}
      className={className}
      imageClassName={imageClassName}
      priority={priority ?? ("priority" in media ? media.priority : false)}
      loading={loading}
      sizes={sizes}
    />
  );
}
