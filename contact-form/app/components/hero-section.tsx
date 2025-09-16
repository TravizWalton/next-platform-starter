"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from "./social-icons"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 sm:mb-6 bg-accent text-accent-foreground text-xs sm:text-sm">
            Desarrollador .NET Senior
          </Badge>
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
            Construyendo el futuro con
            <span className="gradient-text block">Microsoft .NET</span>
          </h1>
          <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Especialista en desarrollo de aplicaciones empresariales robustas y escalables utilizando el ecosistema
            completo de Microsoft: .NET, C#, Azure, SQL Server y más.
          </p>

          <div className="flex justify-center gap-4 mb-6 sm:mb-8">
            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0077B5] hover:bg-[#005885] rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#333] hover:bg-[#24292e] rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://wa.me/541123483383"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              onClick={() => scrollToSection("proyectos")}
            >
              Ver Proyectos
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  )
}
