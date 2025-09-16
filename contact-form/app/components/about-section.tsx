import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16">
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl font-bold text-white">.NET</span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-2">5+ Años</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">de experiencia profesional</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <p className="font-open-sans text-base sm:text-lg leading-relaxed">
                Soy un desarrollador apasionado por las tecnologías Microsoft con más de 5 años de experiencia creando
                soluciones empresariales robustas y escalables.
              </p>
              <p className="font-open-sans text-base sm:text-lg leading-relaxed">
                Mi expertise abarca desde aplicaciones web modernas con ASP.NET Core hasta microservicios en Azure,
                siempre enfocándome en las mejores prácticas y arquitecturas limpias.
              </p>
              <p className="font-open-sans text-base sm:text-lg leading-relaxed">
                Me especializo en transformar ideas complejas en soluciones tecnológicas eficientes que impulsan el
                crecimiento empresarial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
