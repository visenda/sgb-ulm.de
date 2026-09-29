import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import { localBusinessJsonLd } from "@/lib/jsonld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.claim} in ${site.region.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "SG Blitzblank ist Ihr Partner für Gebäudereinigung & Service in Ulm und Umgebung: Fensterreinigung, Terrassenarbeiten, Baureinigung und Unterhaltsreinigung.",
  keywords: [
    "Gebäudereinigung Ulm",
    "Fensterreinigung Ulm",
    "Terrassenreinigung",
    "Baureinigung",
    "Unterhaltsreinigung",
    "Gebäudeservice",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} – ${site.claim}`,
    description:
      "Professionelle Gebäudereinigung & Service in Ulm und Umgebung. Fensterreinigung, Terrassenarbeiten, Baureinigung und Unterhaltsreinigung aus einer Hand.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
