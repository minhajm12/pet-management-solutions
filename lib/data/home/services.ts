export type SalonServiceCategoryId =
  | "all"
  | "baths-fluff"
  | "haircuts-styling"
  | "therapeutic-spa"
  | "nails-dental";

export type SalonServiceItemData = {
  id: string;
  title: string;
  description: string;
  image: string;
  durationMinutes: number;
  serviceType: string;
  points: string[];
  price: number;
  buttonText: string;
  buttonUrl: string;
  categoryIds: Exclude<SalonServiceCategoryId, "all">[];
};

export type SalonServiceTab = {
  id: SalonServiceCategoryId;
  label: string;
};

export const salonServiceTabs: SalonServiceTab[] = [
  { id: "all", label: "All Services" },
  { id: "baths-fluff", label: "Baths & Fluff Day" },
  { id: "haircuts-styling", label: "Haircuts & Styling" },
  { id: "therapeutic-spa", label: "Therapeutic Spa" },
  { id: "nails-dental", label: "Nails & Dental" },
];

export const salonServicesData: SalonServiceItemData[] = [
  {
    id: "full-grooming",
    title: "Full Grooming",
    description: "Bath, Haircut And Nail Care In One Visit.",
    image: "/assets/img/services/service-img-1.jpg",
    durationMinutes: 60,
    serviceType: "Groom",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1800,
    buttonText: "Book Service",
    buttonUrl: "/services/full-grooming",
    categoryIds: [
      "baths-fluff",
      "haircuts-styling",
      "nails-dental",
    ],
  },
  {
    id: "bath-blow-dry",
    title: "Bath & Blow-Dry",
    description: "Gentle Wash And Dry For A Fresh, Soft Coat.",
    image: "/assets/img/services/service-img-2.jpg",
    durationMinutes: 60,
    serviceType: "Bath",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 900,
    buttonText: "Book Service",
    buttonUrl: "/services/bath-blow-dry",
    categoryIds: ["baths-fluff"],
  },
  {
    id: "relaxing-dog-spa",
    title: "Relaxing Dog Spa",
    description: "A Soothing Soak And Gentle Coat Treatment.",
    image: "/assets/img/services/service-img-3.jpg",
    durationMinutes: 60,
    serviceType: "Spa",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1600,
    buttonText: "Book Service",
    buttonUrl: "/services/relaxing-dog-spa",
    categoryIds: ["therapeutic-spa", "baths-fluff"],
  },
  {
    id: "coat-trim-styling",
    title: "Coat Trim & Styling",
    description: "A Tailored Trim For A Neat, Stylish Coat.",
    image: "/assets/img/services/service-img-4.jpg",
    durationMinutes: 60,
    serviceType: "Styling",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1200,
    buttonText: "Book Service",
    buttonUrl: "/services/coat-trim-styling",
    categoryIds: ["haircuts-styling"],
  },
  {
    id: "de-shedding-treatment",
    title: "De-Shedding Treatment",
    description: "Remove Loose Fur For A Lighter, Tidy Coat.",
    image: "/assets/img/services/service-img-5.jpg",
    durationMinutes: 60,
    serviceType: "Coat",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 1000,
    buttonText: "Book Service",
    buttonUrl: "/services/de-shedding-treatment",
    categoryIds: ["baths-fluff", "therapeutic-spa"],
  },
  {
    id: "paw-nail-care",
    title: "Paw & Nail Care",
    description: "Nail Trimming And Balm For Soft, Tidy Paws.",
    image: "/assets/img/services/service-img-6.jpg",
    durationMinutes: 60,
    serviceType: "Nails",
    points: [
      "Certified Stylist",
      "Fear Free Handling",
      "Coat Assessment Included",
    ],
    price: 500,
    buttonText: "Book Service",
    buttonUrl: "/services/paw-nail-care",
    categoryIds: ["nails-dental"],
  },
];

