"use client";
import { motion } from "framer-motion";

const ProgressBar = () => {
  // Données des barres de progression
  const data = [
    { year: 2017, value: 91.27 },
    { year: 2018, value: 87 },
    { year: 2019, value: 92 },
  ];

  return (
    <div className="mt-6 space-y-6 bg-gray-100 p-6 rounded-lg">
      {data.map((item) => (
        <div key={item.year} className="relative">
          {/* Texte de l'année */}
          <p className="text-sm font-semibold text-gray-800">
            EMPRÉSTIMO APROVADO EM {item.year}
          </p>

          {/* Barre de progression */}
          <div className="relative h-2 bg-gray-300 rounded-full mt-2 overflow-hidden">
            {/* Animation de la barre verte */}
            <motion.div
              className="absolute top-0 left-0 h-2 bg-green-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 1.2 }}
            >
              {/* Popover du pourcentage */}
              <motion.div
                className="absolute -top-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{
                  left: `${item.value}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {/* Valeur du pourcentage */}
                <div className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                  {item.value}%
                </div>
                {/* Flèche sous le popover */}
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
