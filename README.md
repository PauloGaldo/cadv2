# CAD v2

Esta aplicación fue generada usando JHipster 5.0.1, puedes encontrar la documentacion y ayuda en [https://www.jhipster.tech/documentation-archive/v5.0.1](https://www.jhipster.tech/documentation-archive/v5.0.1).

## Desarrollo

Antes de que puedas compilar este proyecto, debes instalar y configurar las siguientes dependencias en tu computadora:

1. [Node.js][]: Usaremos Node para correr un servidor web de desarrolo y compilar el proyecto.
    Dependiendo de su sistema, puedes instalar Node desde su codigo fuente o como un paquete pre-evasado.

Despues de instalar Node, deberias ser capaz de correr los siguientes comandos para instalar herramientas de desarrollo.
Solo necesitaras correr este comando cuando las dependencias cambien en [package.json](package.json).

Nosotros usamos scripts npm y [Webpack][] como nuestro sistema de compilado.

Corre los siguientes comandos en dos terminales separadas para crear una maravillosa experiencia de desarrollo donde tu navegador
se auto-refrescara cuando los archivos cambien en tu disco duro.

    npm start

[Npm][] es tambien usado para manejar dependencias CSS y JavaScript usadas en esta aplicación. Puedes actualizar las dependencias 
especificando una versión mas nueva en [package.json](package.json). Tambien puedes correr `npm update` y `npm install` para administrar dependencias.
Añade la bandera de ayuda `help` en cualquier comando apra que puedas ver como usarlo. Por ejemplo, `npm help update`.

El comando `npm run` listara todos los scripts dispopnibles para correr en este proyecto.


### Manejando dependencias

or ejemplo, para añadir la libreria [Leaflet][] como una dependencia de tu aplicación, deberias correr el siguiente comando:

    npm install --save --save-exact leaflet

Para beneficiarte de las definiciones de tipo de Typescript del repositorio [DefinitelyTyped][] en desarrollo, deberias ejecutar el siguiente comando:

    npm install --save-dev --save-exact @types/leaflet

Luego importaras los archivos JS y CSS especificados en las instrucciones de instalación de la biblioteca para que [Webpack][] los reconozca:
Nota: todavía quedan algunas cosas más por hacer para Leaflet que no detallaremos aquí. here.


### Client tests

Las pruebas unitarias son ejecutadas por [Jest][] y escritas con [Jasmine][]. Están ubicados en [src/test/javascript/](src/test/javascript/) y se pueden ejecutar con:

    npm test


[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Jest]: https://facebook.github.io/jest/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
