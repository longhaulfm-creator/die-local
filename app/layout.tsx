import type { Metadata } from "next";
import { Alfa_Slab_One, Montserrat, Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

// Main Logo Wordmark
const alfaSlab = Alfa_Slab_One({
  weight: "400",
  variable: "--font-logo",
  subsets: ["latin"],
  display: "swap",
});

// UI and Body Text
const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Tagline and Secondary Accents
const montserrat = Montserrat({
  variable: "--font-tagline",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Die Local | Bar and Grill",
  description: "Where Good Decisions Are Made - Port Shepstone's premier dining and event venue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alfaSlab.variable} ${roboto.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}