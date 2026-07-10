import { motion } from "framer-motion";

// 9 real review screenshots – served from /public
const REVIEWS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/t (${i + 1}).png`,
  alt: `Customer review ${i + 1}`,
}));

// Split reviews into 3 balanced columns
const col1 = REVIEWS.filter((_, i) => i % 3 === 0);
const col2 = REVIEWS.filter((_, i) => i % 3 === 1);
const col3 = REVIEWS.filter((_, i) => i % 3 === 2);

type ReviewColumnProps = {
  className?: string;
  reviews: typeof REVIEWS;
  duration?: number;
};

function ReviewColumn({
  className,
  reviews,
  duration = 18,
}: ReviewColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {/* Duplicate the list for seamless infinite scroll */}
        {[0, 1].map((loop) => (
          <div key={loop} className="flex flex-col gap-5">
            {reviews.map((review) => (
              <div
                key={`${loop}-${review.id}`}
                className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-black/5"
              >
                <img
                  src={review.src}
                  alt={review.alt}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl text-black sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
          Kind words from couples and families we have had the honour to
          photograph.
        </p>

        <div
          className="relative mt-8 flex h-[480px] justify-center gap-5 overflow-hidden sm:mt-12 sm:h-[580px] sm:gap-6"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ReviewColumn
            reviews={col1}
            duration={22}
            className="w-full max-w-[320px] sm:max-w-xs"
          />
          <ReviewColumn
            reviews={col2}
            className="hidden w-full max-w-xs md:block"
            duration={26}
          />
          <ReviewColumn
            reviews={col3}
            className="hidden w-full max-w-xs lg:block"
            duration={20}
          />
        </div>

        {/* Review Us CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-zinc-500">
            Loved our work? We'd love to hear from you!
          </p>
          <a
            href="https://www.google.com/maps/place/GPRS+Photography/@10.9540507,79.3759203,17z/data=!4m12!1m2!2m1!1sPhotography+studio!3m8!1s0x3a55337e6ad854e3:0x1c060e770f6b2a5d!8m2!3d10.9540514!4d79.3806844!9m1!1b1!15sChJQaG90b2dyYXBoeSBzdHVkaW-SARJwaG90b2dyYXBoeV9zdHVkaW_gAQA!16s%2Fg%2F11vrtvrbvy!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
