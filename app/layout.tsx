import type { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curry Express | Authentic Indian Street Food & Curries",
  description:
    "Experience the finest authentic curries, clay-oven tandoori, and delicious Indian street food. Order online via DoorDash and taste the tradition.",
  keywords: [
    "curry express",
    "authentic indian food",
    "indian street food",
    "butter chicken online",
    "order indian food online",
    "doordash indian restaurant",
    "best curries",
  ],
  authors: [{ name: "Curry Express" }],
  creator: "Curry Express",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://curryexpress.com",
    title: "Curry Express | Authentic Indian Street Food & Curries",
    description:
      "Experience the finest authentic curries, clay-oven tandoori, and delicious Indian street food. Order online via DoorDash.",
    siteName: "Curry Express",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Curry Express Premium Indian Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curry Express | Authentic Indian Street Food & Curries",
    description:
      "Experience the finest authentic curries, clay-oven tandoori, and delicious Indian street food.",
    images: [
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-brand-black text-brand-cream antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
