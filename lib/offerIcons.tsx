import { Gift, Tag, Zap, type LucideIcon } from "lucide-react";
import type { OfferIcon } from "@/lib/cmsTypes";

export const offerIconMap: Record<OfferIcon, LucideIcon> = {
  gift: Gift,
  zap: Zap,
  tag: Tag,
};
