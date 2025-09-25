# Guía de uso de este proyecto

---

## 1. Instalación en entorno de desarrollo

Para empezar, asegúrate de tener instalados **Node.js** (versión 22.14.0 o superior) y **Git** con acceso SSH.

Una vez que hayas clonado el repositorio, ve a la carpeta principal del proyecto (donde se encuentra el archivo `package.json`) y ejecuta el siguiente comando en tu terminal para instalar todas las dependencias:

`npm install`

---

## 2. Iniciar el modo de desarrollo

Para levantar un servidor de desarrollo y empezar a trabajar, simplemente ejecuta:

`npm run dev`

---

## 3. Construcción del sitio para producción

Cuando estés listo para generar la versión final del sitio, optimizada y lista para subir a un servidor, usa este comando:

`npm run build`

Esto creará una nueva carpeta llamada `dist` con todos los archivos estáticos necesarios.

---

## 4. Vista previa de la versión de producción

**Importante:** Para ver la versión compilada del proyecto, **no abras el archivo `index.html` directamente en tu navegador**. En su lugar, usa este comando, que levantará un servidor local para la previsualización:

`npm run preview`

**¿Por qué no abrir el archivo directamente?**

El sitio se vería sin estilos. Esto sucede porque los archivos CSS y otros recursos se enlazan con rutas relativas que solo funcionan correctamente cuando se cargan desde un servidor web.
