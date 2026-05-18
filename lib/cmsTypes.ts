export type OfferIcon = "gift" | "zap" | "tag";

export type Offer = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: string;
  salePrice: string;
  savings: string;
  badge: string;
  badgeColor: string;
  /** HTTPS URL or `local:{offerId}` for uploaded blobs in localStorage */
  image: string;
  icon: OfferIcon;
  timeLeft: string;
};

export type Review = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarBg: string;
  rating: number;
  date: string;
  text: string;
  dish: string;
  verified: boolean;
};
