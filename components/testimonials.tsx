"use client";

export default function Testimonials() {
  return (
    <div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ce que disent nos clients
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Primo gruppo di testimonianze */}
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">JD</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Giovanni Duarte</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {
                      "Servizio eccellente e professionale. Mi hanno aiutato a ottenere il miglior tasso per il mio mutuo immobiliare."
                    }
                  </p>
                </div>
              </div>

              {/* Secondo gruppo di testimonianze */}
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">MS</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Maria Santoro</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {
                      "Squadra molto reattiva e competente. Raccomando vivamente i loro servizi per qualsiasi tipo di prestito."
                    }
                  </p>
                </div>
              </div>

              {/* Terzo gruppo di testimonianze */}
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">AF</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Antonio Ferri</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {
                      "Un grande ringraziamento per il supporto nel mio progetto di consolidamento del credito. Sono molto soddisfatto del risultato!"
                    }
                  </p>
                </div>
              </div>

              {/* Quarto gruppo di testimonianze */}
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">CL</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Carla Lorenzi</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {
                      "Professionalità e cortesia. Mi hanno guidato passo dopo passo per ottenere il mio prestito. Consigliatissimi!"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 23s linear infinite;
        }
      `}</style>
    </div>
  );
}
