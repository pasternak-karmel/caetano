"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PaymentMail } from "@/lib/mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const loanform = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Número de telefone inválido"),
  loanAmount: z.string().min(1, "Montante é obrigatório"),
  repaymentPeriod: z.string().min(1, "Período é obrigatório"),
  terms: z.boolean().refine((val) => val === true, "Deve aceitar os termos"),
});

export function LoanApplicationForm() {
  const form = useForm<z.infer<typeof loanform>>({
    resolver: zodResolver(loanform),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      loanAmount: "",
      repaymentPeriod: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof loanform>) {
    await PaymentMail(values);
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-6">
          Pedido rápido e totalmente online, com aprovação e crédito na conta em
          48h úteis.
        </h1>
        <div className="space-y-2 text-gray-600">
          <p>Montante €5.000 a €7.000.000</p>
          <p>Prazo 36 a 360 meses</p>
          <p>
            Possibilidade de inclusão dos valores de impostos e encargos, no
            valor financiado.
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primeiro nome *</FormLabel>
                  <FormControl>
                    <Input placeholder="Primeiro nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome *</FormLabel>
                  <FormControl>
                    <Input placeholder="Sobrenome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Celular *</FormLabel>
                  <FormControl>
                    <Input placeholder="Celular" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Montante do empréstimo (€) *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Montante do empréstimo"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repaymentPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Período de reembolso (meses) *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Período de reembolso"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Declaro serem verdadeiras as informações prestadas,
                    autorizando a facultar os dados transmitidos à(s)
                    instituição(ões) bancária(s)/financeira(s) com o objectivo
                    da sua concretização do Pedido de Crédito.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600"
          >
            ENVIAR MENSAGEM
          </Button>
        </form>
      </Form>

      <p className="text-xs text-gray-500 mt-6">
        Exemplo para um montante de crédito de 10.000 € durante 24 meses a uma
        TAEG fixa de 2% (taxa de empréstimo fixa de 2%) excluindo seguro
        opcional: 24 prestações mensais de 425 €. Montante total devido pelo
        consumidor: 10.200 €
      </p>
    </div>
  );
}
