import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skills = [
    { name: "C# / .NET", level: 95, category: "Backend" },
    { name: "ASP.NET Core", level: 90, category: "Backend" },
    { name: "Entity Framework", level: 85, category: "Backend" },
    { name: "SQL Server", level: 88, category: "Database" },
    { name: "Azure", level: 82, category: "Cloud" },
    { name: "React / TypeScript", level: 78, category: "Frontend" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "Azure DevOps", level: 80, category: "DevOps" },
  ]

  const categories = ["Backend", "Database", "Cloud", "Frontend", "DevOps"]

  return (
    <section id="habilidades" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category) => (
              <Card key={category} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="font-montserrat font-bold text-lg sm:text-xl text-primary">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-open-sans font-medium text-sm sm:text-base">{skill.name}</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
