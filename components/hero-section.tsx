"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className="relative bg-blue-700 py-20 overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-light mb-8 max-w-4xl mx-auto leading-tight">
          Oppure un&apos;attenzione personalizzata, un manager, che aiuta a
          provare a fare Processo dall&apos;inizio alla fine con pianificazione
          estesa.
        </h1>

        <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-90">
          La qualità del nostro servizio è motivo di grande orgoglio, per alcuni
          Due nuovi Clienti sono indicati dai vecchi Clienti, ma anche noi I
          vecchi clienti sono disposti a richiedere nuovamente i nostri servizi.
        </p>
      </div>
    </section>
  );
}
