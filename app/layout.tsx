import type { Metadata } from "next";
import { Google_Sans_Flex, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Pet Management Solution | Shear Heaven",
  description: "A comprehensive pet management solution for grooming businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, googleSans.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-google-sans">
        {children}
      </body>
    </html>
  );
}
