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

    ./mvnw
    npm start

[Npm][] es tambien usado para manejar dependencias CSS y JavaScript usadas en esta aplicación. Puedes actualizar las dependencias 
especificando una versión mas nueva en [package.json](package.json). Tambien puedes correr `npm update` y `npm install` para administrar dependencias.

[Npm][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `npm help update`.

The `npm run` command will list all of the scripts available to run for this project.

### Service workers

Service workers are commented by default, to enable them please uncomment the following code.

* The service worker registering script in index.html

```html
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker Registered'); });
    }
</script>
```

Note: workbox creates the respective service worker and dynamically generate the `service-worker.js`

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

    npm install --save --save-exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    npm install --save-dev --save-exact @types/leaflet

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Note: there are still few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].



## Building for production

To optimize the app application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test



For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw verify -Pprod dockerfile:build dockerfile:tag@version dockerfile:tag@commit

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 5.0.1 archive]: https://www.jhipster.tech/documentation-archive/v5.0.1

[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v5.0.1/development/
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v5.0.1/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v5.0.1/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v5.0.1/running-tests/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v5.0.1/setting-up-ci/


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
