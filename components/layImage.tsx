"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ImgLayout() {
  const pathname = usePathname();
  const formattedPath = pathname.split("/").pop()?.replace(/-/g, " ");
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/05.jpg"
          alt=""
          fill
          className="object-cover h-36 brightness-75"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative w-full">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium text-center">
            {formattedPath}
          </h1>
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-white/90">
              <li>
                <Link
                  href="/"
                  className="text-green-500 hover:text-green-700 transition-colors"
                >
                  Início
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li aria-current="page">{formattedPath}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
