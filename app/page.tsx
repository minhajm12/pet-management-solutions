import HomePage from "@/components/modules/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Management Solution | Shear Heaven",
  description: "Pet Management Solution | Shear Heaven",
  keywords: "Pet Management Solution | Shear Heaven",
  robots: "Pet Management Solution | Shear Heaven",
  openGraph: {
    title: "Pet Management Solution | Shear Heaven",
    description: "Pet Management Solution | Shear Heaven",
    images: [
      {
        url: "/assets/img/dashboard-image.png",
        width: 1200,
        height: 630,
        alt: "Pet Management Solution | Shear Heaven",
      },
    ],
    url: "http://localhost:3000",
    siteName: "Shear Heaven Pet Spa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Management Solution | Shear Heaven",
    description: "Pet Management Solution | Shear Heaven",
    images: ["/assets/img/dashboard-image.png"],
  },
};

export default function Home() {
  return (
    <HomePage />
  );
}
