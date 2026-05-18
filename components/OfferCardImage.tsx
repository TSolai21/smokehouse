"use client";

import Image from "next/image";
import { resolveOfferImageSrc } from "@/lib/imageStorage";
import type { Offer } from "@/lib/cmsTypes";

type OfferCardImageProps = {
  offer: Offer;
  className?: string;
};

export default function OfferCardImage({ offer, className }: OfferCardImageProps) {
  const src = resolveOfferImageSrc(offer);

  if (!src) {
    return (
      <div className="absolute inset-0 bg-brand-dark flex items-center justify-center">
        <span className="text-brand-cream-muted text-xs">No image</span>
      </div>
    );
  }

  if (src.startsWith("data:") || src.startsWith("blob:")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={offer.title}
        className={`absolute inset-0 w-full h-full ${className ?? ""}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={offer.title}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}
