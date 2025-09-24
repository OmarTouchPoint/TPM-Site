# Guía de uso para este proyecto

## Instalación de proyecto en entorno de desarrollo:

Se necesita tener instalado nodejs, la versión más reciente o a partir de la 22.14.0 y git con el acceso ssh para subir cambios locales a la nube.
Una vez instalado el proyecto con git clone se debe realizar la instalación de los paquetes necesarios, para esto se abre la terminal, se avanza a la carpeta raiz (en la que se puede acceder o listar el archivo package.json) y se ejecuta el comando  _npm install_  en la consola.

## Levantar modo de desarrollo

Para levantar el modo de desarrollo se ejecuta el comando _npm run dev_ .

## Construcción del sitio

Para generar la versión de producción del sitio se debe ejecutar el comando npm run build, esto generará la carpeta _dist_ la cual consta de archivos estáticos que pueden ser subidos a cualquier servidor

## Vista previa de build

Para ver correctamente laversion de producción de la carpeta _dist_ NO se abra directamente en ele navegador el index del proyecto, baste con ejecutar el comando _npm run preview_ lo cual levantará  un servidor local para ver el proyecto

### ¿Por qué no abrir el index directamente?

No pasará nada, se mostrará el html, pero cargará sin estilos, ya que estos se generan en un archivo optimizado vinculado directamente con rutas relativas, las cuales no funcionaran si se abre en el navegador directamente ya que este abre el path del sistema como url. 
