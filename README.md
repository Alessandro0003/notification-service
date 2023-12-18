<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Future Implementations

[ ] - Docker Compose

[X] - Field Validation

[X] - Method Requests - POST, GET, PATCH

[X] - in-aplication testing

## Description

  ## Arquitetura de Software, usada no projeto foi DDD, => Domain-Drive Design.

-> Factories => São mecanismo, responsáveis por criar objetos complexos, abstraindo
a lógica de instanciação

-> Use Cases => Elas ficam responsavel pela funcionalidade especifica na interações
do sistema, encapsulando a lógica de negócios

-> Repositories => Os Repositories gerenciam na parte de persistir e recuperar,
também proporcionam uma camada de abstração para acesso a dados.

-> Entities => Objetos que tem uma identidade única é que peristem ao longo 
do tempo.

-> DTOs => São objetos que transportam dados entre camadas do sistema. Isso
facilita na transferência de informações.

-> Infra => Camada responsável por fornecer suporte técnico na aplicação.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
