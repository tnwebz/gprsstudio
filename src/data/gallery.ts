export type ServiceSlug =
  | "birthday"
  | "hindu_wedding"
  | "christian_wedding"
  | "bhramin_wedding"
  | "engagement"
  | "housewarming"
  | "puberty"
  | "sastiyathapoorthi"
  | "upanayanam"
  | "maternity"
  | "birthday_party";

export type GalleryCategory = "outdoor" | "candid" | "events" | "others";

export const CATEGORY_META: Record<
  GalleryCategory,
  { title: string; description: string; image: string }
> = {
  outdoor: {
    title: "Outdoor",
    description: "Explore our beautiful outdoor photography collections.",
    image: "/o1.png",
  },
  candid: {
    title: "Candid",
    description:
      "Capturing authentic, unposed moments that tell your true story.",
    image: "/c1.jpg",
  },
  events: {
    title: "Events",
    description:
      "Professional coverage for all your special events and celebrations.",
    image: "/e1.png",
  },
  others: {
    title: "Others",
    description: "A diverse collection of our miscellaneous photography work.",
    image: "/hero.png",
  },
};

export const SERVICE_META: Record<
  ServiceSlug,
  { title: string; description: string; image: string }
> = {
  birthday: {
    title: "Baby Shoot",
    description:
      "We provide a professional photography service and have many years of experience capturing joyous celebrations.",
    image: "/b1.png",
  },
  hindu_wedding: {
    title: "Hindu Wedding",
    description:
      "We believe wedding photography should be unscripted, fun, and timeless.",
    image: "/w1.png",
  },
  christian_wedding: {
    title: "Christian Wedding",
    description:
      "Beautifully capturing the sacred vows and cherished moments of your special day.",
    image: "/chr1.png",
  },
  bhramin_wedding: {
    title: "Bhramin Wedding",
    description:
      "Documenting the rich traditions and rituals with elegance and authenticity.",
    image: "/bhr1.png",
  },
  engagement: {
    title: "Engagement Ceremony",
    description:
      "Celebrate the beginning of your forever with stunning and intimate portraits.",
    image: "/eng1.png",
  },
  housewarming: {
    title: "Housewarming Ceremony",
    description: "Capturing the warmth and joy of stepping into your new home.",
    image: "/hou1.png",
  },
  puberty: {
    title: "Puberty Ceremony",
    description:
      "Honoring milestone traditions with vibrant and heartfelt photography.",
    image: "/pub1.png",
  },
  sastiyathapoorthi: {
    title: "Sastiyathapoorthi",
    description:
      "Commemorating 60 years of grace with beautiful memories of your grand celebration.",
    image: "/sat1.png",
  },
  upanayanam: {
    title: "Upanayanam",
    description:
      "Preserving the sacred thread ceremony with utmost respect and clarity.",
    image: "/upn1.png",
  },
  maternity: {
    title: "Maternity Photography",
    description:
      "Celebrate the beauty of motherhood with elegant, heartfelt portraits in a relaxed and comfortable session.",
    image: "/m1.jpg",
  },
  birthday_party: {
    title: "Birthday Party",
    description:
      "Capturing all the fun, joy, and unforgettable moments of your special day.",
    image: "/birth.png",
  },
};
