"use server"

import { Resend } from "resend"

export async function sendEmail(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !email || !subject || !message) {
      return { error: "Todos los campos son requeridos" }
    }

    if (!process.env.RESEND_TO_EMAIL_ADDRESS) {
      return { error: "Variable de entorno faltante: RESEND_TO_EMAIL_ADDRESS" }
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL_ADDRESS,
      subject: `Nuevo mensaje de portfolio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0078D4; border-bottom: 2px solid #0078D4; padding-bottom: 10px;">
            Nuevo mensaje desde tu portfolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Mensaje:</h3>
            <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #0078D4; margin: 10px 0;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Este mensaje fue enviado desde tu portfolio web de desarrollador .NET</p>
          </div>
        </div>
      `,
    })

    return { success: "Email enviado exitosamente" }
  } catch (error: any) {
    if ("message" in error && error.message.includes("Missing API key")) {
      return { error: "Variable de entorno faltante: RESEND_API_KEY" }
    }
    return { error: error.message ?? "Error al enviar el email" }
  }
}
