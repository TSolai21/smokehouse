import type { Offer, Review } from "@/lib/cmsTypes";
import { defaultOffers, defaultReviews } from "@/lib/defaultCmsData";
import { clearAllOfferImages } from "@/lib/imageStorage";

const OFFERS_KEY = "curryexpress_offers";
const REVIEWS_KEY = "curryexpress_reviews";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent("curryexpress-cms-update", { detail: key }));
}

export function getOffers(): Offer[] {
  return readJson(OFFERS_KEY, defaultOffers);
}

export function saveOffers(offers: Offer[]): void {
  writeJson(OFFERS_KEY, offers);
}

export function resetOffers(): Offer[] {
  clearAllOfferImages();
  saveOffers(defaultOffers);
  return defaultOffers;
}

export function getReviews(): Review[] {
  return readJson(REVIEWS_KEY, defaultReviews);
}

export function saveReviews(reviews: Review[]): void {
  writeJson(REVIEWS_KEY, reviews);
}

export function resetReviews(): Review[] {
  saveReviews(defaultReviews);
  return defaultReviews;
}

export function createId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export const CMS_KEYS = { OFFERS_KEY, REVIEWS_KEY } as const;
