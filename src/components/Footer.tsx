import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-8 sm:py-12 px-4 sm:px-8 text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left text-sm">
        {/* Brand */}
        <div className="flex flex-col gap-1">
          <h2 className="font-serif text-2xl font-bold tracking-wider">
            GPRS Photography
          </h2>
          <p className="text-zinc-400 text-xs mt-1">Timeless photography</p>
        </div>

        {/* Contact Info container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          {/* Email */}
          <div className="flex items-center gap-2 text-zinc-300">
            <Mail className="h-4 w-4 text-orange-500" />
            <a
              href="mailto:gprsphotos@gmail.com"
              className="hover:text-white transition-colors"
            >
              gprsphotos@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-zinc-300">
            <Phone className="h-4 w-4 text-orange-500" />
            <a
              href="tel:+917708575051"
              className="hover:text-white transition-colors"
            >
              +91 7708 575 051
              <br />
              (Mr.Prabhaharan)
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-zinc-300 max-w-xs text-center md:text-left">
            <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
            <span>
              A4, Annamalai Complex, Indhira Gandhi salai,{" "}
              <br className="hidden md:block" />
              Kumbakonam 612 001
            </span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2 text-zinc-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-orange-500"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <a
              href="https://www.instagram.com/gprsphotos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              @gprsphotos
            </a>
          </div>

          {/* Google Rating */}
          <div className="flex items-center gap-2 text-zinc-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-orange-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <a
              href="https://www.google.com/maps/place/GPRS+Photography/@10.9540507,79.3759203,17z/data=!4m12!1m2!2m1!1sPhotography+studio!3m8!1s0x3a55337e6ad854e3:0x1c060e770f6b2a5d!8m2!3d10.9540514!4d79.3806844!9m1!1b1!15sChJQaG90b2dyYXBoeSBzdHVkaW-SARJwaG90b2dyYXBoeV9zdHVkaW_gAQA!16s%2Fg%2F11vrtvrbvy!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Rate Us on Google
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 flex flex-col items-center gap-2">
        <div className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} GPRS Photography. All rights
          reserved.
        </div>
        <a
          href="https://tnwebz.com"
          target="_blank"
          rel="noopener"
          className="text-xs text-gray-500 opacity-60 hover:opacity-100 transition-opacity"
        >
          Designed by TNWebz
        </a>
      </div>
    </footer>
  );
}
