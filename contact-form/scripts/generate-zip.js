const fs = require("fs")
const path = require("path")
const archiver = require("archiver")

async function generateStaticSiteZip() {
  console.log("🚀 Generando archivo ZIP del sitio estático...")

  // Crear el directorio de salida si no existe
  const outputDir = path.join(process.cwd(), "dist")
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Crear el archivo ZIP
  const output = fs.createWriteStream(path.join(outputDir, "portfolio-estatico.zip"))
  const archive = archiver("zip", {
    zlib: { level: 9 }, // Máxima compresión
  })

  // Manejar eventos del archivo
  output.on("close", () => {
    console.log(`✅ Archivo ZIP generado exitosamente: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`)
    console.log("📁 Ubicación: dist/portfolio-estatico.zip")
    console.log("\n📋 Contenido del ZIP:")
    console.log("   - index.html (página principal)")
    console.log("   - styles.css (estilos CSS)")
    console.log("   - script.js (funcionalidad JavaScript)")
    console.log("   - README.md (instrucciones de uso)")
    console.log("\n🌐 Para usar el sitio:")
    console.log("   1. Extrae el ZIP en una carpeta")
    console.log("   2. Abre index.html en tu navegador")
    console.log("   3. O usa un servidor local (ver README.md)")
  })

  archive.on("error", (err) => {
    console.error("❌ Error al generar el ZIP:", err)
    throw err
  })

  // Conectar el archivo con el archivador
  archive.pipe(output)

  // Agregar archivos al ZIP
  const staticDir = path.join(process.cwd(), "static")

  // Verificar que los archivos existan
  const files = ["index.html", "styles.css", "script.js"]
  for (const file of files) {
    const filePath = path.join(staticDir, file)
    if (fs.existsSync(filePath)) {
      archive.file(filePath, { name: file })
      console.log(`📄 Agregado: ${file}`)
    } else {
      console.warn(`⚠️  Archivo no encontrado: ${file}`)
    }
  }

  // Crear README.md con instrucciones detalladas
  const readmeContent = `# Portfolio Desarrollador .NET - Sitio Estático

## 🎯 Descripción
Portfolio web profesional para desarrollador especializado en tecnologías Microsoft .NET con diseño responsive y paleta de colores corporativa de Microsoft.

## 📦 Contenido del paquete
- \`index.html\` - Página principal del portfolio
- \`styles.css\` - Estilos CSS con paleta de colores de Microsoft
- \`script.js\` - Funcionalidad JavaScript (navegación, formularios, animaciones)
- \`README.md\` - Este archivo con instrucciones

## 🚀 Instalación y uso

### Opción 1: Servidor web local (Recomendado)
1. Extrae todos los archivos en una carpeta
2. Abre una terminal en esa carpeta
3. Ejecuta un servidor web local:
   \`\`\`bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   \`\`\`
4. Abre tu navegador en \`http://localhost:8000\`

### Opción 2: Abrir directamente
1. Extrae todos los archivos en una carpeta
2. Haz doble clic en \`index.html\` para abrirlo en tu navegador

## ✨ Características
- ✅ **Diseño responsive** - Optimizado para mobile y desktop
- ✅ **Paleta Microsoft** - Colores corporativos (#0078D4)
- ✅ **Navegación suave** - Scroll animado entre secciones
- ✅ **Formulario funcional** - Validación y envío de contacto
- ✅ **Redes sociales** - Enlaces a LinkedIn y GitHub
- ✅ **WhatsApp flotante** - Botón de contacto directo (+54 11 2348-3383)
- ✅ **Animaciones CSS** - Barras de progreso y efectos hover
- ✅ **SEO optimizado** - Meta tags y estructura semántica

## 🎨 Personalización

### Información personal
Edita el archivo \`index.html\` y busca las siguientes secciones:
- **Hero Section**: Cambia el título y descripción
- **About Section**: Actualiza la biografía y estadísticas
- **Skills Section**: Modifica las tecnologías y porcentajes
- **Projects Section**: Agrega tus proyectos reales
- **Experience Section**: Actualiza tu experiencia laboral
- **Contact Section**: Cambia la información de contacto

### Enlaces sociales
En \`index.html\`, busca los enlaces:
\`\`\`html
<a href="https://linkedin.com/in/tu-perfil" target="_blank">
<a href="https://github.com/tu-usuario" target="_blank">
\`\`\`

### Número de WhatsApp
Busca en \`index.html\`:
\`\`\`html
<a href="https://wa.me/541123483383" target="_blank">
\`\`\`
Cambia el número por el tuyo.

### Colores y estilos
En \`styles.css\`, modifica las variables CSS:
\`\`\`css
:root {
    --primary: #0078d4;        /* Color principal */
    --primary-hover: #106ebe;  /* Color hover */
    --primary-active: #005a9e; /* Color activo */
}
\`\`\`

## 🛠️ Tecnologías utilizadas
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables
- **JavaScript ES6+** - Funcionalidad interactiva
- **Google Fonts** - Montserrat y Open Sans
- **SVG Icons** - Iconos escalables

## 🌐 Compatibilidad
Compatible con todos los navegadores modernos:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Opera 47+

## 📱 Responsive Design
El sitio se adapta automáticamente a:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Solución de problemas

### El formulario no funciona
El formulario incluye validación JavaScript básica. Para funcionalidad completa de envío, necesitarás:
1. Un backend para procesar formularios
2. O integrar con servicios como Formspree, Netlify Forms, etc.

### Las fuentes no cargan
Si tienes problemas con las fuentes de Google:
1. Verifica tu conexión a internet
2. O descarga las fuentes localmente

### Imágenes no aparecen
Las imágenes usan placeholders. Reemplaza las URLs:
\`\`\`html
<img src="/placeholder.svg?height=400&width=400" alt="Tu imagen">
\`\`\`
Por tus imágenes reales.

## 📄 Licencia
Código libre para uso personal y comercial.

## 📞 Soporte
Para soporte técnico, contacta a través del formulario del portfolio o WhatsApp.

---
**Generado con v0.app** - Portfolio Desarrollador .NET
`

  archive.append(readmeContent, { name: "README.md" })
  console.log("📄 Agregado: README.md")

  // Finalizar el archivo
  await archive.finalize()
}

// Ejecutar la función
generateStaticSiteZip().catch(console.error)
