import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smokehouse & Co. | Premium Burgers & Grill",
  description:
    "Experience the finest flame-grilled burgers, wood-fired pizzas, and craft beverages. Order online via DoorDash and taste the difference.",
  keywords: [
    "smokehouse burgers",
    "premium burgers",
    "grill restaurant",
    "order burgers online",
    "doordash burgers",
    "craft food",
    "best burgers",
  ],
  authors: [{ name: "Smokehouse & Co." }],
  creator: "Smokehouse & Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smokehouseandco.com",
    title: "Smokehouse & Co. | Premium Burgers & Grill",
    description:
      "Experience the finest flame-grilled burgers, wood-fired pizzas, and craft beverages. Order online via DoorDash.",
    siteName: "Smokehouse & Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Smokehouse & Co. Premium Burger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smokehouse & Co. | Premium Burgers & Grill",
    description:
      "Experience the finest flame-grilled burgers, wood-fired pizzas, and craft beverages.",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=630&fit=crop",
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
  viewport: "width=device-width, initial-scale=1",
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
      </body>
    </html>
  );
}
