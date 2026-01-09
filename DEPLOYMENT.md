# Guía de Despliegue en Vercel - Óptica S&V

## ✅ Checklist Pre-Despliegue

Antes de desplegar, asegúrate de que:

- [ ] El código está en un repositorio Git (GitHub, GitLab, o Bitbucket)
- [ ] Tienes una cuenta en [Vercel](https://vercel.com)
- [ ] Tienes tu API Key de Gemini lista ([obtener aquí](https://aistudio.google.com/app/apikey))
- [ ] Has probado el build localmente (`npm run build`)

## 🚀 Pasos de Despliegue

### 1. Preparar el Repositorio

```bash
# Si aún no has inicializado Git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Ready for Vercel deployment"

# Conectar con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/optica-sv.git
git branch -M main
git push -u origin main
```

### 2. Importar en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Selecciona "Import Git Repository"
3. Autoriza a Vercel para acceder a tu GitHub
4. Selecciona el repositorio `optica-sv`
5. Vercel detectará automáticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### 3. Configurar Variables de Entorno

**IMPORTANTE:** Sin esta configuración, el asistente AI no funcionará.

1. En la página de configuración del proyecto, ve a la sección "Environment Variables"
2. Agrega la siguiente variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Tu API key de Gemini
   - **Environment:** Production, Preview, Development (selecciona todos)

### 4. Deploy

1. Click en "Deploy"
2. Espera 1-2 minutos mientras Vercel construye tu aplicación
3. ¡Listo! Tu app estará disponible en una URL como: `https://optica-sv.vercel.app`

## 🔄 Despliegues Automáticos

Vercel automáticamente:
- **Despliega a producción** cuando haces push a la rama `main`
- **Crea preview deployments** para cada Pull Request
- **Ejecuta el build** y verifica que no haya errores

## 🛠️ Comandos Útiles de Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Login
vercel login

# Desplegar a preview
vercel

# Desplegar a producción
vercel --prod

# Ver logs
vercel logs

# Ver lista de deployments
vercel ls

# Configurar variables de entorno desde CLI
vercel env add GEMINI_API_KEY
```

## 🐛 Troubleshooting

### Error: "Build failed"
- Verifica que `npm run build` funcione localmente
- Revisa los logs en Vercel Dashboard
- Asegúrate de que todas las dependencias estén en `package.json`

### Error: "API Key not found"
- Verifica que `GEMINI_API_KEY` esté configurada en Environment Variables
- Asegúrate de haber seleccionado todos los ambientes (Production, Preview, Development)
- Redeploy después de agregar la variable

### Error: "404 on page refresh"
- Esto ya está solucionado con `vercel.json` que incluye rewrites para SPA
- Si persiste, verifica que `vercel.json` esté en la raíz del proyecto

### La app carga pero el chat no funciona
- Verifica la API Key en Vercel Dashboard
- Abre la consola del navegador (F12) para ver errores
- Verifica que la API Key tenga permisos y cuota disponible

## 📊 Monitoreo

Vercel proporciona:
- **Analytics:** Métricas de tráfico y rendimiento
- **Logs:** Logs en tiempo real de tu aplicación
- **Speed Insights:** Análisis de rendimiento de carga
- **Web Vitals:** Métricas de experiencia de usuario

Accede a todo esto desde el Dashboard de Vercel.

## 🔒 Seguridad

- ✅ `.env.local` está en `.gitignore` (nunca se sube a Git)
- ✅ Las API keys se configuran en Vercel (no en el código)
- ✅ Las variables de entorno están encriptadas en Vercel
- ✅ HTTPS habilitado por defecto en todos los deployments

## 🌐 Dominio Personalizado

Para usar tu propio dominio:

1. Ve a Project Settings → Domains
2. Agrega tu dominio (ej: `www.opticasv.com`)
3. Sigue las instrucciones para configurar DNS
4. Vercel automáticamente configurará HTTPS

## 📱 Preview Deployments

Cada commit a una rama que no sea `main` crea un preview deployment:
- URL única para cada preview
- Ideal para testing antes de producción
- Se puede compartir con el equipo para revisión

## ✨ Próximos Pasos

Después del primer deployment:
- Configura un dominio personalizado
- Habilita Analytics
- Configura notificaciones de deployment
- Revisa Speed Insights para optimizaciones
