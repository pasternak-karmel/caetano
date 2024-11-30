import { Car, Home, LineChart, Briefcase, Trophy, SmileIcon } from 'lucide-react'
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ProductCard = ({ title, description, icon }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-300 hover:scale-105 hover:border-green-500">
      {/* Background image that appears on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-green-500/90 mix-blend-multiply opacity-80" />
        <Image
          src="/sour.jpeg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      
      {/* Content that rotates on hover */}
      <div className="relative flex flex-col items-center text-center transition-transform duration-300 group-hover:rotate-3">
        <div className="mb-4 text-green-500 transition-colors duration-300 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Produtos() {
  const products = [
    {
      title: "Credito Personale",
      description: "Il Credito Personale è una soluzione finanziaria offerta da un ente autorizzato per l'acquisto di beni di consumo o altri prodotti.",
      icon: <SmileIcon className="h-8 w-8" />,
    },
    {
      title: "Consolidamento",
      description: "Il Credito Consolidato senza ipoteca è una soluzione che ti permetterà di riequilibrare il tuo bilancio familiare.",
      icon: <LineChart className="h-8 w-8" />,
    },
    {
      title: "Mutuo Casa",
      description: "Nuova, seconda casa o trasferimento - Finanziamento fino al 90% del LTV - Negoziazione del miglior spread - Termini fino a 50 anni - Aumento del valore della tua ipoteca.",
      icon: <Home className="h-8 w-8" />,
    },
    {
      title: "Credito Auto",
      description: "Il Credito Auto ti consente di acquistare il tuo veicolo nuovo o usato con le migliori condizioni di finanziamento.",
      icon: <Car className="h-8 w-8" />,
    },
    {
      title: "Credito Aziendale",
      description: "Gestione Semplice è a tua disposizione per aiutare la tua azienda a crescere con le migliori soluzioni finanziarie.",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      title: "Sale e Leaseback",
      description: "Sale e Leaseback è la soluzione ideale per gli imprenditori che necessitano di liquidità mantenendo l'uso dei propri beni.",
      icon: <Trophy className="h-8 w-8" />,
    },
  ];
  

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-12 text-center text-3xl font-bold">Nossos produtos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

