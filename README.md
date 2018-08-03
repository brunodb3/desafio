# desafio-clipping

por [@brunodb3](https://github.com/brunodb3)

[![Desafio_Clipping_-_Bruno_Duarte_Brito.png](https://s8.postimg.cc/woixxsxo5/Desafio_Clipping_-_Bruno_Duarte_Brito.png)](https://postimg.cc/image/6sz7elvu9/)

Este projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 6.1.2, tomando como base o projeto [codevelopers-website](https://github.com/grupo-codevelopers/codevelopers-website).

Consiste na resolução do [desafio apresentado pela empresa Clipping CACD](https://github.com/clippingcacd/desafio), para o processo seletivo de desenvolvedores front-end.

## Instalação/Primeiros passos

Antes de clonar o repositório, tenha certeza de ter [NodeJS >= v6](https://nodejs.org/en/) - (eu utilizo a versão 10.6.0) e [Angular CLI](https://cli.angular.io/) instalados e configurados.

Instale as dependências e execute `ng serve` ou `npm start` para abrir um servidor local.

```sh
npm install # instala os módulos do package.json, usando npm
ng serve # abre o servidor livereload local (padrão localhost:4200)
# ou
npm start # também abre o servidor local, vide package.json
```

## Executando a build

[O comando build do Angular CLI](https://github.com/angular/angular-cli/wiki/build) compila a aplicação em um diretório (padrão é `/dist`), para facilitar o deploy em um servidor remoto.

Execute o processo de build, passando a flag `--env=ENVIRONMENT` de maneira opcional, para alterar o arquivo de ambiente a ser utilizado.

```sh
# esses comandos são equivalentes
ng build --target=production --environment=prod
ng build --prod --env=prod
ng build --prod
# esses também são
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build
```

_Você pode usar a compilação [ahead-of-time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), ao passar a flag `--aot`_

### Observação

Este projeto foi construído utilizando [lazy loading](https://angular.io/guide/lazy-loading-ngmodules) em seus módulos, para otimizar uso de banda em ambiente de produção.

---

Você pode ter diferentes ambientes para sua aplicação, utilizando a pasta `/environments`. [Este artigo](https://medium.com/beautiful-angular/angular-2-and-environment-variables-59c57ba643be) vai te dar mais informações sobre ambientes.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Executando testes unitários

Execute `ng test` para rodar testes unitários através do [Karma](https://karma-runner.github.io).

## Executando testes end-to-end (ponta-a-ponta)

Execute `ng e2e` para rodar testes end-to-end através do [Protractor](http://www.protractortest.org/).

## Mais informações

Para encontrar mais informações sobre Angular CLI, execute `ng help` ou entre no [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Controle de versões utilizando Git

Para padronização do controle de versões, este projeto utiliza [Standard Version](https://github.com/conventional-changelog/standard-version) e [Commitizen](https://github.com/commitizen/cz-cli), para facilitar comandos como `commit`, `push` e atualizar o `CHANGELOG.md` para todos os desenvolvedores.

**Bruno Duarte Brito - 2018**
