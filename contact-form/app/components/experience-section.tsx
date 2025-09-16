import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior .NET Developer",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      description:
        "Liderazgo técnico en el desarrollo de aplicaciones empresariales con .NET 8 y Azure. Implementación de arquitecturas de microservicios y mentoring a desarrolladores junior.",
      achievements: [
        "Migración exitosa de aplicaciones legacy a .NET 8",
        "Reducción del 40% en tiempos de respuesta de APIs",
        "Implementación de CI/CD con Azure DevOps",
      ],
    },
    {
      title: ".NET Developer",
      company: "Innovate Systems",
      period: "2020 - 2022",
      description:
        "Desarrollo de aplicaciones web con ASP.NET Core y Entity Framework. Colaboración en equipos ágiles para la entrega de soluciones de alta calidad.",
      achievements: [
        "Desarrollo de 15+ aplicaciones web empresariales",
        "Integración con APIs de terceros y servicios Azure",
        "Optimización de consultas SQL mejorando performance 60%",
      ],
    },
    {
      title: "Junior .NET Developer",
      company: "StartupTech",
      period: "2019 - 2020",
      description:
        "Inicio en el desarrollo profesional con .NET Framework y SQL Server. Participación en proyectos de modernización de aplicaciones legacy.",
      achievements: [
        "Aprendizaje acelerado de tecnologías Microsoft",
        "Contribución en 8 proyectos de refactoring",
        "Certificación Microsoft Azure Fundamentals",
      ],
    },
  ]

  return (
    <section id="experiencia" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16">
            Experiencia Profesional
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-primary mb-1">{exp.title}</h3>
                      <p className="font-open-sans text-base sm:text-lg font-semibold text-foreground">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground font-medium text-sm sm:text-base sm:text-right">
                      {exp.period}
                    </div>
                  </div>
                  <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-montserrat font-semibold text-foreground text-sm sm:text-base">
                      Logros principales:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="font-open-sans text-muted-foreground flex items-start text-sm sm:text-base"
                        >
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
