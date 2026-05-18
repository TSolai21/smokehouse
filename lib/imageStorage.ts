import {
  LOCAL_IMAGE_PREFIX,
  isLocalImageRef,
  offerIdFromLocalRef,
  localImageRef,
} from "@/lib/cmsConstants";
import type { Offer } from "@/lib/cmsTypes";

const IMAGES_KEY = "smokehouse_offer_images";

type ImageStore = Record<string, string>;

function readStore(): ImageStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(IMAGES_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ImageStore;
  } catch {
    return {};
  }
}

function writeStore(store: ImageStore): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(IMAGES_KEY, JSON.stringify(store));
  window.dispatchEvent(
    new CustomEvent("smokehouse-cms-update", { detail: IMAGES_KEY })
  );
}

export function getOfferImageBlob(offerId: string): string | null {
  return readStore()[offerId] ?? null;
}

export function saveOfferImageBlob(offerId: string, dataUrl: string): void {
  const store = readStore();
  store[offerId] = dataUrl;
  writeStore(store);
}

export function deleteOfferImageBlob(offerId: string): void {
  const store = readStore();
  delete store[offerId];
  writeStore(store);
}

export function clearAllOfferImages(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(IMAGES_KEY);
  window.dispatchEvent(
    new CustomEvent("smokehouse-cms-update", { detail: IMAGES_KEY })
  );
}

export function resolveOfferImageSrc(offer: Offer): string {
  if (isLocalImageRef(offer.image)) {
    const id = offerIdFromLocalRef(offer.image);
    return getOfferImageBlob(id) ?? "";
  }
  return offer.image;
}

export { localImageRef };

export const IMAGE_STORAGE_KEY = IMAGES_KEY;

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Please choose an image file."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Could not read image."));
    };
    reader.onerror = () => reject(new Error("Could not read image."));
    reader.readAsDataURL(file);
  });
}

const MAX_BYTES = 2 * 1024 * 1024;

export async function processImageFile(file: File): Promise<string> {
  if (file.size > MAX_BYTES) {
    throw new Error("Image must be 2MB or smaller.");
  }
  return fileToDataUrl(file);
}
