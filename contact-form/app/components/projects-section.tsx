import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema ERP Empresarial",
      description:
        "Plataforma completa de gestión empresarial desarrollada con .NET 8, Entity Framework y SQL Server. Incluye módulos de inventario, facturación y reportes avanzados.",
      technologies: [".NET 8", "Entity Framework", "SQL Server", "Azure", "React"],
      image: "/enterprise-erp-system-dashboard.jpg",
      link: "#",
    },
    {
      title: "API de Microservicios",
      description:
        "Arquitectura de microservicios escalable implementada en Azure con ASP.NET Core, Docker y Azure Service Bus para comunicación entre servicios.",
      technologies: ["ASP.NET Core", "Docker", "Azure", "Service Bus", "Redis"],
      image: "/microservices-architecture.png",
      link: "#",
    },
    {
      title: "Aplicación de E-commerce",
      description:
        "Tienda online completa con carrito de compras, procesamiento de pagos y panel administrativo. Desarrollada con Blazor Server y integración con Stripe.",
      technologies: ["Blazor Server", "Entity Framework", "Stripe API", "SQL Server"],
      image: "/modern-ecommerce-website.png",
      link: "#",
    },
    {
      title: "Dashboard de Analytics",
      description:
        "Panel de control en tiempo real para análisis de datos empresariales con gráficos interactivos y reportes automatizados usando SignalR.",
      technologies: ["ASP.NET Core", "SignalR", "Chart.js", "Azure SQL", "React"],
      image: "/business-analytics-dashboard.png",
      link: "#",
    },
  ]

  return (
    <section id="proyectos" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="font-montserrat font-bold text-lg sm:text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-open-sans text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-accent text-accent-foreground text-xs sm:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-sm sm:text-base"
                  >
                    Ver Proyecto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
