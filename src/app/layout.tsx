import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Velto Solutions — Solutions that move you forward",
    template: "%s | Velto Solutions",
  },
  description:
    "Velto Solutions identifies problems and provides practical solutions across multiple service categories. Solutions that move you forward.",
  metadataBase: new URL("https://veltosolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Velto Solutions",
    title: "Velto Solutions — Solutions that move you forward",
    description:
      "Velto Solutions identifies problems and provides practical solutions across multiple service categories.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velto Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velto Solutions — Solutions that move you forward",
    description:
      "Velto Solutions identifies problems and provides practical solutions across multiple service categories.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Velto Solutions",
              url: "https://veltosolutions.com",
              logo: "https://veltosolutions.com/logo.svg",
              description:
                "Velto Solutions identifies problems and provides practical solutions across multiple service categories.",
              telephone: ["+2348100982105", "+2348149817027"],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-velto-bg text-velto-text font-body min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
