"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ProductContent from "./ProductContent";
import Link from "next/link";

export function CorpsSection() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (value: string) => {
    router.push(`/${value}`);
  };

  const currentSelection = pathname.split("/").pop();
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image Section */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={
              currentSelection === "credito-pessoal"
                ? "/single.jpg"
                : currentSelection === "credito-habitacao"
                ? "/single2.jpg"
                : "/single3.jpg"
            }
            alt="Casal consultando crédito"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Products Section */}

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Produtos</h2>
            <RadioGroup value={currentSelection} className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="credito-pessoal"
                  id="credito-pessoal"
                  checked={currentSelection === "credito-pessoal"}
                  onClick={() => handleClick("credito-pessoal")}
                />
                <Label
                  htmlFor="credito-pessoal"
                  className="text-lg text-gray-700 cursor-pointer"
                >
                  Crédito Pessoal
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="credito-habitacao"
                  id="credito-habitacao"
                  checked={currentSelection === "credito-habitacao"}
                  onClick={() => handleClick("credito-habitacao")}
                />
                <Label
                  htmlFor="credito-habitacao"
                  className="text-lg text-gray-700 cursor-pointer"
                >
                  Crédito Habitação
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="credito-empresa"
                  id="credito-empresa"
                  checked={currentSelection === "credito-empresa"}
                  onClick={() => handleClick("credito-empresa")}
                />
                <Label
                  htmlFor="credito-empresa"
                  className="text-lg text-gray-700 cursor-pointer"
                >
                  Crédito Empresa
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Link href={"/pedido-de-credito"}>
          <Button
            size="lg"
            className="w-full bg-[#1a365d] hover:bg-[#1a365d]/90 text-white"
            >
            <FileText className="mr-2 h-5 w-5" />
            Pedido de Crédito
          </Button>
            </Link>
        </div>
      </div>
      <div className="w-full flex flex-col mx-auto">
        {/* <div className="p-6 w-[75%]">
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              CREDITO PERSONALE
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Il Credito Personale è una soluzione finanziaria che si stipula
              con un ente autorizzato per l&apos;acquisto di beni di consumo o
              altri prodotti. Il Credito Personale è destinato a scopi privati e
              non aziendali o istituzionali, risultando così l&apos;opzione più
              praticabile per i privati.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Spesso il Credito Personale viene concesso per l&apos;acquisto di
              beni o per la realizzazione di sogni.
            </p>
            <ul className="text-green-600 space-y-2 font-medium">
              <li>&gt; Da 10.000€ a 1.000.000€</li>
              <li>&gt; Termini fino a 10 anni</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              CREDITO CONSOLIDATO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Il Credito Consolidato senza ipoteca è una soluzione che ti
              permetterà di riequilibrare il tuo bilancio familiare. Unendo i
              tuoi crediti in uno solo, potrai beneficiare di una nuova rata,
              significativamente più bassa rispetto al totale che stavi pagando
              per tutte le tue rate.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Il credito consolidato è sempre più comune in situazioni in cui il
              bilancio familiare è in difficoltà. Unendo i tuoi crediti, puoi
              anche prolungare il periodo di rimborso.
            </p>
            <ul className="text-green-600 space-y-2 font-medium">
              <li>&gt; Senza garanzie reali</li>
              <li>&gt; Importi fino a 5.000.000€</li>
              <li>&gt; Liquidità aggiuntiva se desiderata</li>
            </ul>
          </div>
        </div> */}
        <ProductContent />
      </div>
    </section>
  );
}
