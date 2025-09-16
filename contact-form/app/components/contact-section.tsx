"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SubmitButton } from "./submit-button"
import { sendEmail } from "../actions/send-email"
import { useState } from "react"
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from "./social-icons"

export function ContactSection() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)

    if (result.success) {
      setMessage("¡Mensaje enviado exitosamente! Te contactaré pronto.")
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    } else {
      setMessage(`Error: ${result.error}`)
    }

    // Clear message after 5 seconds
    setTimeout(() => setMessage(""), 5000)
  }

  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16">
            Trabajemos Juntos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4">¿Tienes un proyecto en mente?</h3>
                <p className="font-open-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Estoy disponible para nuevos proyectos y colaboraciones. Si buscas un desarrollador .NET experimentado
                  para tu próximo proyecto, no dudes en contactarme.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:developer@ejemplo.com"
                      className="text-muted-foreground hover:text-primary text-sm sm:text-base transition-colors"
                    >
                      developer@ejemplo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center flex-shrink-0">
                    <LinkedInIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/tu-perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm sm:text-base transition-colors"
                    >
                      linkedin.com/in/tu-perfil
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center flex-shrink-0">
                    <GitHubIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">GitHub</p>
                    <a
                      href="https://github.com/tu-usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm sm:text-base transition-colors"
                    >
                      github.com/tu-usuario
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">WhatsApp</p>
                    <a
                      href="https://wa.me/541123483383"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm sm:text-base transition-colors"
                    >
                      +54 11 2348-3383
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-montserrat font-semibold text-sm sm:text-base">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {[".NET 8", "Azure", "Microservicios", "APIs REST", "Entity Framework"].map((spec) => (
                    <Badge key={spec} className="bg-accent text-accent-foreground text-xs sm:text-sm">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/541123483383?text=Hola,%20me%20interesa%20hablar%20sobre%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <Card className="bg-card border-border order-1 lg:order-2">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-lg sm:text-xl">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form id="contact-form" action={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Nombre" className="bg-input" required />
                    <Input name="email" placeholder="Email" type="email" className="bg-input" required />
                  </div>
                  <Input name="subject" placeholder="Asunto" className="bg-input" required />
                  <Textarea
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    className="bg-input resize-none"
                    required
                  />
                  <SubmitButton />
                </form>

                {message && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      message.includes("Error")
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
