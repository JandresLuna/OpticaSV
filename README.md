<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Óptica S&V - Salud y Estilo

Aplicación web moderna de óptica con asistente AI integrado usando Gemini.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Rápido (Recomendado)

1. **Haz push de tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

2. **Importa el proyecto en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

3. **Configura las variables de entorno**
   - En la configuración del proyecto en Vercel, ve a "Environment Variables"
   - Agrega: `VITE_GEMINI_API_KEY` con tu API key de Gemini
   - Obtén tu API key en: https://aistudio.google.com/app/apikey

4. **Deploy**
   - Click en "Deploy"
   - ¡Tu app estará lista en minutos!

### Opción 2: Despliegue con Vercel CLI

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel

# Para producción
vercel --prod
```

## 💻 Desarrollo Local

**Prerequisites:** Node.js 18+

1. **Clona el repositorio**
   ```bash
   git clone <tu-repo>
   cd Optica
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura variables de entorno**
   - Copia `.env.example` a `.env.local`
   - Agrega tu `VITE_GEMINI_API_KEY` en `.env.local`

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   
   La app estará disponible en `http://localhost:3000`

## 📦 Build para Producción

```bash
npm run build
npm run preview
```

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API
- **Deployment:** Vercel

## 📝 Notas Importantes

- Las variables de entorno deben configurarse en Vercel para que la API de Gemini funcione en producción
- El proyecto usa `vercel.json` para configuración de SPA routing
- Asegúrate de que `.env.local` nunca se suba a Git (ya está en `.gitignore`)
