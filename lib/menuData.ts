export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "burgers" | "pizza" | "drinks" | "desserts";
  badges?: ("spicy" | "popular" | "new" | "veggie")[];
};

export type CategoryId = "all" | "burgers" | "pizza" | "drinks" | "desserts";

export type Category = {
  id: CategoryId;
  label: string;
  emoji: string;
};

export const categories: Category[] = [
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "desserts", label: "Desserts", emoji: "🍰" },
];

export const menuCategories: Category[] = [
  { id: "all", label: "All", emoji: "✨" },
  ...categories,
];

export function getMenuHref(categoryId: CategoryId): string {
  return categoryId === "all" ? "/menu" : `/menu?category=${categoryId}`;
}

export function isValidCategoryId(id: string | null): id is CategoryId {
  return menuCategories.some((c) => c.id === id);
}

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "b1",
    name: "The Smokehouse Classic",
    description:
      "Double smash patty, aged cheddar, caramelized onions, house sauce on brioche bun",
    price: "$14.99",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop&q=80",
    category: "burgers",
    badges: ["popular"],
  },
  {
    id: "b2",
    name: "Inferno Diablo",
    description:
      "Ghost pepper patty, habanero mayo, jalapeños, pepper jack cheese, crispy shallots",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=600&fit=crop&q=80",
    category: "burgers",
    badges: ["spicy", "popular"],
  },
  {
    id: "b3",
    name: "Black Truffle Royale",
    description:
      "Wagyu beef, black truffle aioli, arugula, brie cheese, caramelized figs",
    price: "$22.99",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop&q=80",
    category: "burgers",
    badges: ["new"],
  },
  {
    id: "b4",
    name: "Garden Blaze",
    description:
      "Plant-based patty, avocado cream, sun-dried tomatoes, microgreens, vegan aioli",
    price: "$13.99",
    image:
      "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=600&h=600&fit=crop&q=80",
    category: "burgers",
    badges: ["veggie"],
  },

  // Pizza
  {
    id: "p1",
    name: "Smokehouse BBQ",
    description:
      "Slow-smoked brisket, BBQ base, mozzarella, red onion, fresh cilantro",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop&q=80",
    category: "pizza",
    badges: ["popular"],
  },
  {
    id: "p2",
    name: "Truffle Margherita",
    description:
      "San Marzano tomatoes, fresh buffalo mozzarella, basil, truffle oil drizzle",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop&q=80",
    category: "pizza",
    badges: ["popular"],
  },
  {
    id: "p3",
    name: "Volcano Pepperoni",
    description:
      "Double pepperoni, ghost pepper tomato base, chili flakes, mozzarella blend",
    price: "$17.99",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=600&fit=crop&q=80",
    category: "pizza",
    badges: ["spicy"],
  },
  {
    id: "p4",
    name: "Garden Harvest",
    description:
      "Roasted peppers, zucchini, olives, goat cheese, herb pesto base, pine nuts",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop&q=80",
    category: "pizza",
    badges: ["veggie"],
  },

  // Drinks
  {
    id: "d1",
    name: "Craft Lemonade",
    description:
      "Hand-squeezed Meyer lemons, house simple syrup, fresh mint, sparkling water",
    price: "$5.99",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=600&fit=crop&q=80",
    category: "drinks",
    badges: ["popular"],
  },
  {
    id: "d2",
    name: "Smoky Iced Coffee",
    description:
      "Cold-brew concentrate, smoked vanilla syrup, oat milk, caramel drizzle",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop&q=80",
    category: "drinks",
    badges: ["new"],
  },
  {
    id: "d3",
    name: "Berry Blaze Shake",
    description:
      "Mixed berries, vanilla ice cream, whipped cream, berry coulis",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop&q=80",
    category: "drinks",
    badges: ["popular"],
  },
  {
    id: "d4",
    name: "Spiced Mango Lassi",
    description:
      "Alphonso mango, thick yogurt, cardamom, saffron, rose water",
    price: "$6.49",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&h=600&fit=crop&q=80",
    category: "drinks",
  },

  // Desserts
  {
    id: "ds1",
    name: "Lava Brownie",
    description:
      "Warm dark chocolate brownie, molten center, vanilla bean ice cream, sea salt",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&h=600&fit=crop&q=80",
    category: "desserts",
    badges: ["popular"],
  },
  {
    id: "ds2",
    name: "Crème Brûlée",
    description:
      "Classic French custard, caramelized sugar crust, Madagascar vanilla, fresh berries",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=600&fit=crop&q=80",
    category: "desserts",
  },
  {
    id: "ds3",
    name: "Churro Sundae",
    description:
      "Cinnamon churros, dulce de leche ice cream, chocolate sauce, whipped cream",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=600&h=600&fit=crop&q=80",
    category: "desserts",
    badges: ["new"],
  },
  {
    id: "ds4",
    name: "NY Cheesecake Slice",
    description:
      "Dense New York style, graham cracker crust, strawberry compote, whipped cream",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=600&fit=crop&q=80",
    category: "desserts",
  },
];
