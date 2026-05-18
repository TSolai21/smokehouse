"use client";

import { useCallback, useEffect, useState } from "react";
import type { Offer, Review } from "@/lib/cmsTypes";
import {
  getOffers,
  saveOffers,
  resetOffers,
  getReviews,
  saveReviews,
  resetReviews,
  CMS_KEYS,
} from "@/lib/cmsStorage";
function useStoredList<T>(
  load: () => T[],
  save: (items: T[]) => void,
  reset: () => T[],
  storageKey: string
) {
  const [items, setItems] = useState<T[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    setItems(load());
    setHydrated(true);
  }, [load]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey || e.key === null) refresh();
    };
    const onCustom = () => refresh();
    window.addEventListener("storage", onStorage);
    window.addEventListener("smokehouse-cms-update", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("smokehouse-cms-update", onCustom);
    };
  }, [refresh, storageKey]);

  const persist = useCallback(
    (next: T[]) => {
      save(next);
      setItems(next);
    },
    [save]
  );

  const resetToDefaults = useCallback(() => {
    const defaults = reset();
    setItems(defaults);
    return defaults;
  }, [reset]);

  return { items, hydrated, persist, refresh, resetToDefaults };
}

export function useOffers() {
  return useStoredList<Offer>(
    getOffers,
    saveOffers,
    resetOffers,
    CMS_KEYS.OFFERS_KEY
  );
}

export function useReviews() {
  return useStoredList<Review>(
    getReviews,
    saveReviews,
    resetReviews,
    CMS_KEYS.REVIEWS_KEY
  );
}
