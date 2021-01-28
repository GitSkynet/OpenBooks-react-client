# OpenBooks V2

React - Client OpenBooks
Cuando realizé el bootcamp de IronHack de desarrollo web Full Stack, realizé mi primer proyecto sobre libros. Tenía la idea de poder aglutinar en un solo sitio todos los recursos posibles sobre informática, hardware, ciencia, lenguajes de programación, bases de datos... De ahí nació la idea de OpenBooks. Tener un sitio web donde siempre poder tener a mano recursos gratis y de calidad para descargarlos directamente a tu dispositivo o leerlos online. Y todo gracias a las APIS de OpenLibra, Google Books y mi propia base de datos, donde poco a poco voy añadiendo más contenido cada día 

## Comenzando 🚀
### Instalación 🔧
Para poder ver y probar este proyecto en tu ordenador local, haz Fork tanto de este repositorio como el [repositorio del servidor](https://github.com/GitSkynet/OpenBooks-react-server)

Antes de poner el servidor en marcha, debemos crear un par de archivos y descargar las pedendencias.

Crea  un **archivo .env.production y un archivo .env.development** en el directorio raíz, donde añadiremos:

### Key 📋
_En el archivo .env.development crea esta key con esta dirección_
```
REACT_APP_API_URI=http://localhost:4000
```
_En el archivo .env.production crea esta key con la dirección de tu host (heroku, firebase, servidor propio, etc)_
```
REACT_APP_API_URI=<servidor aquí>
```

_Una vez los archivos creados, ya estamos listos para instalar las dependencias y levantar el servidor_

_Instalamos todas las dependencias:_
```
npm install
```
_Levantamos el servidor_
```
npm start
```

<!-- _Ya tenemos nuestro backend escuchando en http://localhost:4000 y conectado a mongoDB_

## Realizando el deploy en Heroku ⚙️

## 📌Una vez tengas la build hecha del repo del cliente📌, ejecutamos:

_Para comprobar que se ha añadido a la carpeta public los cambios de la build_
```
git status
```
_Añadimos  Todos los cambios_
```
git add .
```
_Creamos el commit_
```
git commit -m"myCommit"
```
_Hacemos el push a Heroku_
```
git git push heroku master"
```

### Configurando Heroku 🔩

_Habrá que crear en Heoku las mismas variables que declaramos arriba para el archivo .env, pero en este caso; en la dirección de la base de datos le daremos la dirección de mongoDB Atlas_

```
MONGODB_URI=tu dirección de mongodb atlas
```

## Construido con 🛠️

_Server realizado con_

* [nodeJS](https://nodejs.org/es/) - entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
* [Express](https://expressjs.com/es/) - Framework de nodeJS
* [Cloudinary](https://cloudinary.com/) - Nube para gestionar y almacenar imágenes en la web

## Actualemente trabajando🖇️

- Refactorizar y pulir todo el código del backend, para mejorar la eficiencia y rendimiento a la hora de hacer/recibir llamadas de la base de datos.
- Incorporar nodeMailer
- Incorporar Disquss en la web
- Habilitar la creación de listas (user)
- Habilitar feed social
- Habilitar añadir a favoritos/user Lists  

## Autor ✒️

* **LinkedIn** - [Carlos Curtido](https://www.linkedin.com/in/carlos-curtido/)
* **GitHub** - [GitSkynet](https://github.com/GitSkynet)

También puedes mirar mi [portfolio](https://portfoliocurtido.herokuapp.com/) donde muestro otros proyectos en los que estoy trabajando 

## Licencia 📄

Este proyecto está bajo Licencia libre - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---
⌨️ con ❤️ por [Carlos Curtido](https://github.com/GitSkynet) ❤️ -->
