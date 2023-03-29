Introducción
  Este proyecto tiene como objetivo crear una API REST que pueda conectarse a una base de datos MySQL y permita que las   aplicaciones de front-end realicen las siguientes acciones: consultar información, agregar, editar y eliminar datos.

Tecnología
  El proyecto utiliza las siguientes tecnologías:

    Node.js
    Express
    MySQL

Instalación
  Para ejecutar el proyecto, deberás instalar las siguientes dependencias:

    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "helmet": "^6.0.1",
    "mysql2": "^3.2.0",
    "promise-mysql": "^5.2.0"

  Para el desarrollo, también necesitarás lo siguiente:

    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.3",
    "@babel/node": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.22"

Para instalar las dependencias, ejecuta el siguiente comando:

  npm install

Arquitectura
  El proyecto sigue el patrón arquitectónico Modelo-Vista-Controlador (MVC), que implica dividir el código en tres capas distintas:

    Modelo: se encarga de manejar los datos y la lógica.
    Vista: se encarga de presentar los datos al usuario.
    Controlador: se encarga de manejar la entrada del usuario y controlar el flujo de la aplicación.

  Esta arquitectura permite una mejor organización y un mantenimiento más sencillo del código.

Estructura del código
  El proyecto está estructurado de la siguiente manera:

    views: incluye archivos HTML, JavaScript y CSS para el front-end.
    entry: incluye los archivos app, index y config.
    routes: incluye el archivo main.routes.
    controllers: incluye los controladores que manejan la entrada del usuario.

Contribución
  Si deseas contribuir al proyecto, no dudes en enviar informes de errores, solicitudes de funciones o contribuciones de código a través de GitHub.

Limitaciones
  El proyecto tiene las siguientes limitaciones:

    Falta una buena visualización de datos
    Se encuentra en un servidor local
    Solo admite bases de datos MySQL.
    Tiene un manejo de errores limitado.
    Estamos trabajando en mejorar estas limitaciones en futuras versiones del proyecto.

¡Gracias por utilizar nuestra API!