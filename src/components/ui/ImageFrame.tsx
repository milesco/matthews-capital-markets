import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Aspect = "4/3" | "16/10" | "3/4" | "16/9" | "1/1";
type Radius = "md" | "lg" | "xl";

export interface ImageFrameProps {
  src: string;
  alt: string;
  aspect: Aspect;
  radius?: Radius;
  sizes: string;
  priority?: boolean;
  className?: string;
}

const aspectClass: Record<Aspect, string> = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-[1/1]",
};

const radiusClass: Record<Radius, string> = {
  md: "rounded-[18px]",
  lg: "rounded-[22px]",
  xl: "rounded-[28px]",
};

export function ImageFrame({
  src,
  alt,
  aspect,
  radius = "md",
  sizes,
  priority,
  className,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "image-frame relative w-full overflow-hidden",
        aspectClass[aspect],
        radiusClass[radius],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={88}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

export default ImageFrame;
