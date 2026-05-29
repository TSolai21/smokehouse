export type CategoryId = 
  | "all"
  | "soups"
  | "veg-appetizers"
  | "veg-entrees"
  | "non-veg-appetizers"
  | "non-veg-entrees"
  | "goat-curry"
  | "burger-fusions"
  | "biryani"
  | "breads"
  | "desserts"
  | "beverages"
  | "indo-chinese"
  | "kids-menu"
  | "indo-mexican";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: Exclude<CategoryId, "all">;
  badges?: ("spicy" | "popular" | "new" | "veggie")[];
};

export type Category = {
  id: CategoryId;
  label: string;
  emoji: string;
  bannerImage: string;
};

export const categories: Category[] = [
  { id: "soups", label: "Soups", emoji: "🥣", bannerImage: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&h=600&fit=crop" },
  { id: "veg-appetizers", label: "Veg Appetizers", emoji: "🥗", bannerImage: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=1200&h=600&fit=crop" },
  { id: "veg-entrees", label: "Veg Entrees", emoji: "🥘", bannerImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&h=600&fit=crop" },
  { id: "non-veg-appetizers", label: "Non-Veg Appetizers", emoji: "🍗", bannerImage: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?w=1200&h=600&fit=crop" },
  { id: "non-veg-entrees", label: "Non-Veg Entrees", emoji: "🍛", bannerImage: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=1200&h=600&fit=crop" },
  { id: "goat-curry", label: "Goat Curry", emoji: "🥩", bannerImage: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1200&h=600&fit=crop" },
  { id: "burger-fusions", label: "Burger Fusions", emoji: "🍔", bannerImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&h=600&fit=crop" },
  { id: "biryani", label: "Biryani", emoji: "🍚", bannerImage: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1200&h=600&fit=crop" },
  { id: "breads", label: "Breads", emoji: "🫓", bannerImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=600&fit=crop" },
  { id: "desserts", label: "Desserts", emoji: "🍰", bannerImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=600&fit=crop" },
  { id: "beverages", label: "Beverages", emoji: "🥤", bannerImage: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1200&h=600&fit=crop" },
  { id: "indo-chinese", label: "Indo-Chinese", emoji: "🍜", bannerImage: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1200&h=600&fit=crop" },
  { id: "kids-menu", label: "Kids Menu", emoji: "🍟", bannerImage: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=1200&h=600&fit=crop" },
  { id: "indo-mexican", label: "Indo-Mexican/American", emoji: "🌮", bannerImage: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&h=600&fit=crop" },
];

export const menuCategories: Category[] = [
  { id: "all", label: "All", emoji: "✨", bannerImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200&h=600&fit=crop" },
  ...categories,
];

export function getMenuHref(categoryId: CategoryId): string {
  return categoryId === "all" ? "/menu" : `/menu/${categoryId}`;
}

export function isValidCategoryId(id: string | null): id is CategoryId {
  return menuCategories.some((c) => c.id === id);
}

export const menuItems: MenuItem[] = [
  // SOUPS
  { id: "s1", name: "Tomato Soup", description: "", price: "$4.99", category: "soups", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=600&fit=crop&q=80" },
  { id: "s2", name: "Hot and Sour Soup", description: "(Veg/Chicken/Egg/Shrimp). Add-ons: Chicken, Egg, or Shrimp +$1", price: "$4.99", category: "soups" },
  { id: "s3", name: "Sweet Corn Soup", description: "(Veg/Chicken/Egg/Shrimp). Add-ons: Chicken, Egg, or Shrimp +$1", price: "$4.99", category: "soups" },
  { id: "s4", name: "Manchow Soup", description: "(Veg/Chicken/Egg/Shrimp). Add-ons: Chicken, Egg, or Shrimp +$1", price: "$4.99", category: "soups" },

  // VEG APPETIZERS
  { id: "va1", name: "Veg Samosa (2 pcs)", description: "", price: "$5.99", category: "veg-appetizers", badges: ["veggie"], image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&h=600&fit=crop&q=80" },
  { id: "va2", name: "Veg Spring Rolls (5 pcs)", description: "", price: "$5.99", category: "veg-appetizers", badges: ["veggie"] },
  { id: "va3", name: "Veg Pakoda", description: "", price: "$7.99", category: "veg-appetizers", badges: ["veggie"] },
  { id: "va4", name: "Crispy Potato Wedges", description: "", price: "$4.99", category: "veg-appetizers", badges: ["veggie"] },
  { id: "va5", name: "Mozzarella Cheese Sticks", description: "", price: "$5.99", category: "veg-appetizers", badges: ["veggie"] },
  { id: "va6", name: "Gobi Manchurian", description: "", price: "$12.99", category: "veg-appetizers", badges: ["veggie"] },

  // VEG ENTREES
  { id: "ve1", name: "Dhal Makhani", description: "", price: "$12.99", category: "veg-entrees", badges: ["veggie"] },
  { id: "ve2", name: "Veg Korma", description: "", price: "$12.99", category: "veg-entrees", badges: ["veggie"] },
  { id: "ve3", name: "Saag Paneer", description: "", price: "$13.99", category: "veg-entrees", badges: ["veggie"] },
  { id: "ve4", name: "Paneer Tikka Masala", description: "", price: "$13.99", category: "veg-entrees", badges: ["veggie"], image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=600&fit=crop&q=80" },
  { id: "ve5", name: "Kadai Paneer", description: "", price: "$13.99", category: "veg-entrees", badges: ["veggie"] },
  { id: "ve6", name: "Paneer Butter Masala", description: "", price: "$13.99", category: "veg-entrees", badges: ["veggie"] },
  { id: "ve7", name: "Channa Masala", description: "", price: "$12.99", category: "veg-entrees", badges: ["veggie"] },
  { id: "ve8", name: "Aloo Gobi", description: "", price: "$12.99", category: "veg-entrees", badges: ["veggie"] },

  // NON-VEG APPETIZERS
  { id: "nva1", name: "Chicken 65 Boneless", description: "", price: "$12.99", category: "non-veg-appetizers" },
  { id: "nva2", name: "Chilli Chicken", description: "", price: "$12.99", category: "non-veg-appetizers" },
  { id: "nva3", name: "Chicken Manchurian", description: "", price: "$12.99", category: "non-veg-appetizers" },
  { id: "nva4", name: "Drunk'n Fish", description: "", price: "$16.99", category: "non-veg-appetizers" },
  { id: "nva5", name: "Kurkuree Momos", description: "", price: "$12.99", category: "non-veg-appetizers" },
  { id: "nva6", name: "Masala Momos", description: "", price: "$12.99", category: "non-veg-appetizers" },

  // NON-VEG ENTREES
  { id: "nve1", name: "Curry Express Special Chicken Curry", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve2", name: "Murg Saagwala", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve3", name: "Kadai Chicken", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve4", name: "Butter Chicken", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees", badges: ["popular"], image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=600&fit=crop&q=80" },
  { id: "nve5", name: "Chicken Tikka Masala", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees", badges: ["popular"] },
  { id: "nve6", name: "Chicken Vindaloo", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve7", name: "Chicken Korma", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve8", name: "Madras Chicken", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve9", name: "Chicken Chettinadu", description: "Chicken Curry", price: "$14.99", category: "non-veg-entrees" },
  { id: "nve10", name: "Goan Fish Curry", description: "Seafood Curry", price: "$15.99", category: "non-veg-entrees" },
  { id: "nve11", name: "Coastal Fish Curry", description: "Seafood Curry", price: "$15.99", category: "non-veg-entrees" },
  { id: "nve12", name: "Coastal Shrimp Curry", description: "Seafood Curry", price: "$16.99", category: "non-veg-entrees" },
  { id: "nve13", name: "Shrimp Vindaloo", description: "Seafood Curry", price: "$16.99", category: "non-veg-entrees" },

  // GOAT CURRY
  { id: "gc1", name: "Goat Curry", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },
  { id: "gc2", name: "Goat Korma", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },
  { id: "gc3", name: "Kadai Goat", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },
  { id: "gc4", name: "Goat Vindaloo", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },
  { id: "gc5", name: "Goat Tikka Masala", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },
  { id: "gc6", name: "Madras Goat", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },
  { id: "gc7", name: "Mutton Rogan Josh", description: "Served with Steamed Basmati Rice", price: "$16.99", category: "goat-curry" },

  // BURGER FUSIONS
  { id: "bf1", name: "Half Pound Cheese Burger (B/C)", description: "", price: "$12.99", category: "burger-fusions" },
  { id: "bf2", name: "Curry Express Special Burger (B/C)", description: "", price: "$12.99", category: "burger-fusions" },
  { id: "bf3", name: "BBQ Cheese Burger (B/C)", description: "", price: "$12.99", category: "burger-fusions" },
  { id: "bf4", name: "Crispy Chicken Sandwich", description: "", price: "$12.99", category: "burger-fusions" },

  // HYDERABADI DUM BIRYANI
  { id: "b1", name: "Chicken Biryani", description: "", price: "$14.99", category: "biryani", badges: ["popular"] },
  { id: "b2", name: "Chicken Gilma Biryani", description: "", price: "$15.99", category: "biryani" },
  { id: "b3", name: "Goat Biryani", description: "", price: "$15.99", category: "biryani" },
  { id: "b4", name: "Shrimp Biryani", description: "", price: "$15.99", category: "biryani" },
  { id: "b5", name: "Egg Biryani", description: "", price: "$12.99", category: "biryani" },
  { id: "b6", name: "Veg Biryani", description: "", price: "$12.99", category: "biryani", badges: ["veggie"] },
  { id: "b7", name: "Paneer Biryani", description: "", price: "$13.99", category: "biryani", badges: ["veggie"] },

  // BREADS
  { id: "br1", name: "Garlic Naan", description: "", price: "$3.00", category: "breads", badges: ["veggie", "popular"], image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=600&fit=crop&q=80" },
  { id: "br2", name: "Butter Naan", description: "", price: "$2.50", category: "breads", badges: ["veggie"] },
  { id: "br3", name: "Malabar Paratha", description: "", price: "$2.00", category: "breads", badges: ["veggie"] },

  // DESSERTS
  { id: "d1", name: "Rasamalai", description: "", price: "$5.99", category: "desserts" },
  { id: "d2", name: "Gulab Jamun", description: "", price: "$5.99", category: "desserts", badges: ["popular"], image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=600&fit=crop&q=80" },
  { id: "d3", name: "Rice Kheer", description: "", price: "$4.99", category: "desserts" },

  // BEVERAGES
  { id: "bev1", name: "Strawberry Lassi", description: "", price: "$4.99", category: "beverages" },
  { id: "bev2", name: "Mango Lassi", description: "", price: "$4.99", category: "beverages", badges: ["popular"], image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&h=600&fit=crop&q=80" },

  // INDO-CHINESE
  { id: "ic1", name: "Hakka Noodles", description: "(Veg/Chicken/Egg/Shrimp/Paneer/Mix). Add-ons: Chicken, Egg, Shrimp, or Paneer +$2", price: "$12.99", category: "indo-chinese" },
  { id: "ic2", name: "Bombay Noodles", description: "(Veg/Chicken/Egg/Shrimp/Paneer/Mix). Add-ons: Chicken, Egg, Shrimp, or Paneer +$2", price: "$12.99", category: "indo-chinese" },

  // KIDS MENU
  { id: "k1", name: "French Fries", description: "", price: "$3.99", category: "kids-menu" },
  { id: "k2", name: "Chicken Nuggets (5 pcs)", description: "", price: "$4.99", category: "kids-menu" },
  { id: "k3", name: "Chicken Tenders", description: "", price: "$6.99", category: "kids-menu" },
  { id: "k4", name: "Chicken Wings", description: "Tossed Sauces: BBQ, Hot Sauce, Mango Habanero, Bourbon Teriyaki", price: "$6.99", category: "kids-menu" },
  { id: "k5", name: "Shrimp Nuggets", description: "", price: "$6.99", category: "kids-menu" },

  // INDO-MEXICAN & INDO-AMERICAN
  { id: "im1", name: "Chicken Over Rice", description: "", price: "$12.99", category: "indo-mexican" },
  { id: "im2", name: "Quesadilla", description: "", price: "$6.99", category: "indo-mexican" },
  { id: "im3", name: "Burrito", description: "", price: "$3.99", category: "indo-mexican" },
  { id: "im4", name: "Corn Dog", description: "", price: "$6.99", category: "indo-mexican" },
  { id: "im5", name: "Nachos", description: "", price: "$3.99", category: "indo-mexican" },
];
