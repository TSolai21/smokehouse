/** Default overlay gradient on offer card images */
export const OFFER_IMAGE_GRADIENT =
  "from-brand-orange/20 to-brand-red/10";

/** Default badge styling for offers */
export const DEFAULT_OFFER_BADGE_COLOR = "bg-brand-orange";

export const LOCAL_IMAGE_PREFIX = "local:";

export function isLocalImageRef(src: string): boolean {
  return src.startsWith(LOCAL_IMAGE_PREFIX);
}

export function localImageRef(offerId: string): string {
  return `${LOCAL_IMAGE_PREFIX}${offerId}`;
}

export function offerIdFromLocalRef(ref: string): string {
  return ref.slice(LOCAL_IMAGE_PREFIX.length);
}
