import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const menuItems = [
  { name: "Credito Personale", href: "/credito-personale" },
  { name: "Mutuo Casa", href: "/mutuo-casa" },
  { name: "Credito Aziendale", href: "/credito-aziendale" },
  { name: "Richiesta di Credito", href: "/richiesta-di-credito" },
  { name: "Contatti", href: "/contatti" },
];

const infoItems = [
  { name: "Avviso legale", href: "/noticia-legal" },
  { name: "Politica sulla riservatezza", href: "/privacidade" },
];

export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-emerald-500" />
              <div>
                <div className="text-xl font-bold">CAETANO</div>
                <div className="text-lg">SERVIZI</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Azienda nata nel 2005 per facilitare la vita delle persone e
              l&apos;accesso al credito. L&apos;attuale consulenza finanziaria è
              diventata sempre più utile negli ultimi giorni.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Google Plus</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.335 3.295-2.607 0-4.735-2.16-4.735-4.823s2.127-4.823 4.735-4.823c1.486 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.118-1.995C3.412 4.365 0 7.785 0 12s3.413 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.182h2.184v2.184h2.189V13.09H24" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informação</h3>
            <ul className="space-y-2">
              {infoItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Boletim de Notícias</h3>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Seu endereço de email..."
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                ENVIE AGORA
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
