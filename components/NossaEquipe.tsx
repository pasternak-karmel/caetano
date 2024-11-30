import Image from "next/image";
import ProgressBar from "./ProgressBar";
export default function NossaEquipe() {
    return (
      <section className="container mx-auto px-6 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <Image
              src="/01.jpg"
              alt="Nossa Equipe"
              width={500}
              height={300}
              className="w-full rounded-lg"
            />
          </div>
  
          {/* Texte et Progression */}
          <div>
            <h2 className="text-3xl font-bold mb-4">La nostra squadra</h2>
            <p className="text-gray-700">
            I nostri professionisti hanno diversi anni di esperienza nel mercato finanziario,
            ottenendo la sensibilità necessaria per trattare favorevolmente ogni caso.
            </p>
            {/* <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold">EMPRÉSTIMO APROVADO EM 2017</p>
                <div className="relative h-2 bg-gray-200 rounded-full mt-2">
                  <div className="absolute top-0 left-0 h-2 bg-green-600 rounded-full" style={{ width: "91%" }}></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">EMPRÉSTIMO APROVADO EM 2018</p>
                <div className="relative h-2 bg-gray-200 rounded-full mt-2">
                  <div className="absolute top-0 left-0 h-2 bg-green-600 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">EMPRÉSTIMO APROVADO EM 2019</p>
                <div className="relative h-2 bg-gray-200 rounded-full mt-2">
                  <div className="absolute top-0 left-0 h-2 bg-green-600 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div> */}
            <ProgressBar/>
          </div>
        </div>
      </section>
    );
  }
  