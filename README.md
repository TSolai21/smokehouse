# 🍛 Curry Express — Premium Restaurant Website

A cinematic, conversion-focused restaurant showcase website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. All ordering is redirected to DoorDash — no cart or checkout system required.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🧱 Project Structure

```
curry-express/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page (all sections assembled)
│   └── globals.css         # Global styles, custom utilities
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphism navbar
│   ├── HeroSection.tsx     # Parallax hero with CTAs
│   ├── FeaturedMenu.tsx    # Tabbed menu with animated cards
│   ├── MenuCard.tsx        # Reusable menu item card
│   ├── SpecialOffers.tsx   # Combo deals + marquee banner
│   ├── AboutBrand.tsx      # Brand story with floating cards
│   ├── Gallery.tsx         # Masonry food gallery
│   ├── Testimonials.tsx    # Auto-playing review carousel
│   ├── LocationContact.tsx # Map, hours, social links
│   ├── Footer.tsx          # Links, newsletter, DoorDash CTA
│   ├── FloatingOrderButton.tsx  # Sticky mobile/desktop CTA
│   └── SectionHeader.tsx   # Reusable section header
├── lib/
│   └── menuData.ts         # All menu items and categories data
└── tailwind.config.ts      # Custom brand colors, animations
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Brand Black | `#0A0A0A` |
| Charcoal | `#141414` |
| Card | `#1E1E1E` |
| Orange (primary) | `#E85D04` |
| Orange Light | `#F48C06` |
| Cream | `#F5F0E8` |
| Cream Muted | `#C9B99A` |

---

## 🔗 DoorDash Integration

All "Order Now" / "Order on DoorDash" CTAs link to:
```
https://www.doordash.com
```
Replace with your actual DoorDash store URL in each component where `DOORDASH_URL` is declared.

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `next` | React framework |
| `framer-motion` | Animations & transitions |
| `tailwindcss` | Utility-first CSS |
| `lucide-react` | Icon library |

---

## 🌟 Features

- ✅ Cinematic Hero with parallax scroll
- ✅ Animated tabbed menu with badge system
- ✅ Special offers with countdown/timer labels
- ✅ Masonry food gallery with hover effects
- ✅ Auto-playing testimonials carousel
- ✅ Google Maps embed with custom dark filter
- ✅ Glassmorphism navbar (scroll-aware)
- ✅ Floating "Order Now" button (mobile + desktop)
- ✅ Newsletter signup
- ✅ Full SEO meta tags + Open Graph
- ✅ Mobile-first responsive design
- ✅ Custom scrollbar
- ✅ Marquee promotional banner

---

## 📝 Customization

1. **Brand name**: Search/replace `Curry Express` across files
2. **DoorDash URL**: Update `DOORDASH_URL` in all components
3. **Menu items**: Edit `lib/menuData.ts`
4. **Images**: Replace Unsplash URLs with your own food photography
5. **Colors**: Update `tailwind.config.ts` under `brand` colors
6. **Location**: Update address/hours in `LocationContact.tsx`

---

*Built with ❤️ for premium food brands.*
