import { ImageIcon } from "lucide-react";
import Image from "next/image";

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
      aria-label={`พื้นที่สำหรับ${label}`}
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
  sizes?: string;
};

export function SiteImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SiteImageProps) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />
    </figure>
  );
}
