"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    "Hizmetlerimiz",
    "Neden Biz?",
    "Ekibimiz",
    "Referanslar",
    "İletişim",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Sol Konteyner - Logo (%25) */}
          <div className="w-1/4 flex justify-end pr-4">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Orta Konteyner - Menü (%50) */}
          <div className="w-1/2 flex justify-center">
            <ul className="flex items-center gap-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-[#FF6B35] transition-all duration-300 text-sm font-medium relative group py-2 inline-block"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Konteyner - Buton (%25) */}
          <div className="w-1/4 flex justify-start pl-4">
            <Link
              href="#iletisim"
              className="px-6 py-2.5 bg-[#FF6B35] text-white rounded-lg font-medium text-sm transition-all duration-300 hover:bg-[#FF7B45] hover:shadow-lg hover:shadow-[#FF6B35]/50 hover:scale-105 active:scale-100"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

