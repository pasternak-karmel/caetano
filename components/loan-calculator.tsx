"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoanCalculator() {
  const [amount, setAmount] = useState(1260000);
  const [months, setMonths] = useState(82);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = (
    principal: number,
    months: number,
    yearlyRate: number
  ) => {
    const monthlyRate = yearlyRate / 12 / 100;
    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return payment;
  };

  useEffect(() => {
    const payment = calculateMonthlyPayment(amount, months, 1.8);
    setMonthlyPayment(payment);
  }, [amount, months]);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 bg-[#1a365d] p-8 rounded-lg text-white">
      <div className="flex-1 w-full space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-light mb-8">
          Simula il tuo prestito da 5.000€ a 7.000.000€ e rimborsalo
 per un periodo da 36 a 360 mesi ad un tasso dell&apos;1,8%. Rispondere
 immediato
          </h2>
        </div>

        <div className="space-y-8 w-full">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="amount">Importo (€):</label>
              <span className="bg-blue-600 px-3 py-1 rounded">
                {amount.toLocaleString()}
              </span>
            </div>
            <Slider
              id="amount"
              min={10000}
              max={10000000}
              step={1000}
              value={[amount]}
              onValueChange={(value) => setAmount(value[0])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-300">
              <span>10.000</span>
              <span>2.507.500</span>
              <span>5.005.000</span>
              <span>7.502.500</span>
              <span>10.000.000</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="months">Durata (mesi):</label>
              <span className="bg-blue-600 px-3 py-1 rounded">{months}</span>
            </div>
            <Slider
              id="months"
              min={36}
              max={360}
              value={[months]}
              onValueChange={(value) => setMonths(value[0])}
              className="w-full"
            />
          </div>

          <div className="text-center pt-4">
            <div className="text-xl">
            pagamento mensile :{" "}
              <span className="font-bold">
                {monthlyPayment.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                €
              </span>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2 rounded-md">
              CONTINUARE
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image
          src="/02.jpg"
          alt="Business meeting"
          className="rounded-lg"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
