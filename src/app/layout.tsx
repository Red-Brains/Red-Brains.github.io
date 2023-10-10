// Metadata import for better SEO
import { Metadata } from "next";

// Global CSS import
import "@/styles/globals.css";

// Google Fonts import
import { Source_Serif_4, Inter } from "next/font/google";

// Font Awesome CSS setup
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/components/Navbar";
config.autoAddCss = false;

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Red Brains",
  description: "The Digital Infrastructure Company",
  keywords: [
    "Tech",
    "Infrastructure",
    "Digital",
    "Company",
    "Red Brains",
    "Digital Infrastructure",
    "Business Solutions",
    "Digital Solutions",
    "Customer Success",
    "Digital Infrastructure Company",
    "Business Growth",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="brain.svg" type="image/x-icon" />
      <link rel="manifest" href="manifest.json" />
      <body
        className={`${sourceSerif.variable} ${inter.variable} font-sans select-none`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
