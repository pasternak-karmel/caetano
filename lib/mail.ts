"use server";
import { formSchema } from "@/components/contact-form";
import { loanform } from "@/components/loan-application-form";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const PaymentMail = async (values: z.infer<typeof loanform>) => {
  const validatedFields = loanform.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { firstName, lastName, email, phone, loanAmount, repaymentPeriod } =
    validatedFields.data;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4caf50; color: white; padding: 20px; text-align: center;">
        <h1>
            "Nova Solicitação de Empréstimo"
        </h1>
      </div>
      <div style="padding: 20px;">
        
          <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Montante Solicitado:</strong> ${loanAmount}</p>
          <p><strong>Período de Pagamento:</strong> ${repaymentPeriod}</p>
          <p><strong>Termos Aceitos:</strong> Sim</p>
        </div>
      <div style="background-color: #f7f7f7; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
        <p style="font-size: 0.9em; color: #666;">Recebido em ${new Date().toLocaleDateString()}</p>
      </div>
    </div>
    `;
  await resend.emails.send({
    from: "Acme <noreply@glaceandconfort.com>",
    to: values.email,
    subject: "Depuis page de crédito",
    html: htmlContent,
  });
};
export const constactMail = async (values: z.infer<typeof formSchema>) => {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
    }
    
  const { email, phone, message, name } = validatedFields.data;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4caf50; color: white; padding: 20px; text-align: center;">
        <h1>
            "Novo Contato Recebido"
        </h1>
      </div>
      <div style="padding: 20px;">
        
         <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        </div>
      <div style="background-color: #f7f7f7; padding: 20px; text-align: center; border-top: 1px solid #ddd;">
        <p style="font-size: 0.9em; color: #666;">Recebido em ${new Date().toLocaleDateString()}</p>
      </div>
    </div>
    `;
  await resend.emails.send({
    from: "Acme <noreply@glaceandconfort.com>",
    to: values.email,
    subject: "Depuis page de contato",
    html: htmlContent,
  });
};
