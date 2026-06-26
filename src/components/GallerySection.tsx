import { ArrowUpRight } from "lucide-react";
import { type GalleryCategory } from "@/data/gallery";
import { Link } from "react-router-dom";

const CATEGORIES: Array<{
  key: GalleryCategory;
  label: string;
  image: string;
}> = [
  { key: "outdoor", label: "Outdoor", image: "/o1.png" },
  { key: "candid", label: "Candid", image: "/c1.jpg" },
  { key: "events", label: "Events", image: "/e1.png" },
  { key: "others", label: "Others", image: "/hero.png" },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative z-20 -mt-[12vh] rounded-t-2xl bg-zinc-50 px-4 pb-16 pt-12 shadow-[0_-16px_40px_rgba(0,0,0,0.1)] sm:-mt-[22vh] sm:rounded-t-[2rem] sm:px-8 sm:pb-20 sm:pt-16 sm:shadow-[0_-24px_48px_rgba(0,0,0,0.12)] lg:-mt-[32vh] lg:px-14 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Portfolio
        </p>
        <h2 className="mt-3 font-serif text-3xl text-black sm:text-4xl lg:text-5xl">
          Our Gallery
        </h2>
        <p className="mt-3 max-w-xl text-zinc-600">
          Discover Captivating Gallery Display
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={`/collections/${cat.key}`}
              className="group relative h-56 overflow-hidden text-left transition-shadow sm:h-60 md:h-72 ring-1 ring-transparent hover:ring-2 hover:ring-orange-500 hover:shadow-lg block"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-3 left-3 flex items-stretch sm:bottom-4 sm:left-4">
                <div className="bg-white px-3 py-3 sm:px-5 sm:py-4">
                  <p className="text-base font-bold text-black sm:text-lg">
                    {cat.label}
                  </p>
                  <p className="text-xs text-zinc-500">View More</p>
                </div>
                <div className="flex w-11 items-center justify-center bg-orange-500 transition-colors group-hover:bg-orange-600 sm:w-14">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white sm:h-9 sm:w-9">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
