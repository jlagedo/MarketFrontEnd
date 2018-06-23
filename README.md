# MarketFrontEnd

[![CodeFactor](https://www.codefactor.io/repository/github/jlagedo/marketfrontend/badge)](https://www.codefactor.io/repository/github/jlagedo/marketfrontend)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Notes
I need to write this somewhere, while coding bootstrap 4 html using angular 6 I observed that there were some layouts changes when rendering html using angular. Spent some time trying to figure it out.
When angular 6 renders html it defaults to remove all white spaces. Well not an issue but a nice feature, but for my surprise, inline-block elements need those white spaces to add a default margin between then.

https://stackoverflow.com/questions/50376396/is-angular-6-is-removing-default-element-margins

https://github.com/angular/angular/issues/21049

So to summarize:
In order to set angular compiler options in AOT compile (ng serve --aot, ng build --prod) you must alter the tsconfig.app.json to include:

"angularCompilerOptions": {
  "preserveWhitespaces": true
},
In order to set angular compiler options in JIT compile (ng serve) you must alter main.ts specifically the bootstrapModule call:

platformBrowserDynamic().bootstrapModule(AppModule, {
  preserveWhitespaces: true
})
.catch(err => console.log(err));
To be consistent between JIT and AOT, you must alter both files!

