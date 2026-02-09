// src/components/Navbar.tsx
"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MDS Arquitetura
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="#beneficios" className="hover:text-blue-600">
            Benefícios
          </a>
          <a href="#depoimentos" className="hover:text-blue-600">
            Depoimentos
          </a>
          <a href="#garantia" className="hover:text-blue-600">
            Garantia
          </a>
        </nav>

        <a
          href="#produto"
          className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg"
        >
          Comprar
        </a>

        {/* mobile CTA */}
        <a
          href="#produto"
          className="md:hidden inline-block bg-blue-600 text-white px-3 py-2 rounded-lg"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}
