"use client"
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const navigation = [
  { name: "INICIO", href: "/" },
  { name: "CRÉDITO PESSOAL", href: "/credito-pessoal" },
  { name: "CRÉDITO HABITAÇÃO", href: "/credito-habitacao" },
  { name: "CRÉDITO EMPRESA", href: "/credito-empresa" },
  { name: "PEDIDO DE CRÉDITO", href: "/pedido-de-credito" },
  { name: "CONTACTOS", href: "/contactos" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-zinc-900 px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-sm">
            <a
              href="mailto:info@caetano-servicos.com"
              className="hover:text-gray-300"
            >
              Email: info@caetano-servicos.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">Pinterest</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <span className="sr-only">RSS</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <>
      {/* Header */}
      <div className="border-b px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-[#00a859]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-[#00a859]">CAETANO</div>
                <div className="text-lg text-[#00a859]">SERVIZI</div>
              </div>
            </Link>
            <div className="hidden items-center space-x-2 text-sm text-gray-600 lg:flex">
              <MapPin className="h-5 w-5 text-[#00a859]" />
              <div>
                <div>R. Acácio de Paiva 26,</div>
                <div>1700-004 Lisboa, PT</div>
              </div>
            </div>
          </div>
          <Link href="/pedido-de-credito" className="hidden lg:block">
            <Button
              variant="outline"
              className="px-10 py-2 rounded-2xl border-[#00a859] border-2 text-[#00a859] hover:bg-[#00a859] hover:text-white"
            >
              ORDINE
            </Button>
          </Link>

          {/* Mobile Hamburger Icon */}
          <button
            className="p-2 text-[#00a859] bg-white rounded-full lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#00a859] px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden space-x-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-7 py-4 text-sm font-medium text-white cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Button */}
          <button className="p-2 text-[#00a859] bg-white rounded-full">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="flex flex-col space-y-2 py-4 lg:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
    </header>
  );
}
