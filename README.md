![created date - faq-back](https://img.shields.io/date/1689562800?color=007ec6&label=created&style=flat-square)
![license - faq-back](https://img.shields.io/github/license/nascimentoliveira/faq-back?color=007ec6&style=flat-square)
![last commit - faq-back](https://img.shields.io/github/last-commit/nascimentoliveira/faq-back?color=007ec6&style=flat-square)
![repo size - faq-back](https://img.shields.io/github/repo-size/nascimentoliveira/faq-back?color=007ec6&style=flat-square)
![files - faq-back](https://img.shields.io/github/directory-file-count/nascimentoliveira/faq-back?color=007ec6&style=flat-square)
![language - faq-back](https://img.shields.io/github/languages/top/nascimentoliveira/faq-back?color=007ec6&style=flat-square)
![stars - faq-back](https://img.shields.io/github/stars/nascimentoliveira/faq-back?color=007ec6&style=flat-square)
![forks - faq-back](https://img.shields.io/github/forks/nascimentoliveira/faq-back?color=007ec6&style=flat-square)

# API (Back-end) da Aplicação FAQ

Aqui você encontrará informações sobre a estrutura da API, como executá-la localmente, configurar as dependências e realizar as requisições corretamente.

> O código-fonte do front-end da aplicação está hospedado no GitHub em: [FAQ Front-end](https://github.com/nascimentoliveira/faq-front)

> FAQ atualmente pode ser experimentado em: [FAQ Live Demo](https://faq-front-nascimentoliveira.vercel.app/)
>
>> *A primeira requisição ao Live Demo pode levar um pouco mais de tempo para carregar. Isso ocorre porque os servidores são ativados conforme necessário e podem levar alguns instantes para iniciar!*
>>

## Tecnologias Utilizadas

A API da aplicação FAQ foi desenvolvido utilizando as seguintes tecnologias:

- Linguagem de Programação:

  - [TypeScript](https://www.typescriptlang.org/): Linguagem de programação de código aberto que estende a sintaxe do JavaScript, fornecendo tipagem estática opcional e outros recursos para melhorar o desenvolvimento.
- Framework:

  - [Nest.JS](https://nestjs.com/)
- Back-end

  - [Node.js](https://nodejs.org/en/about): Plataforma de desenvolvimento JavaScript assíncrona baseada no motor V8 do Chrome.
  - [Dotenv](https://www.npmjs.com/package/dotenv): Pacote para carregar variáveis de ambiente a partir de um arquivo .env.
- Banco de Dados:

  - [PostgreSQL](https://www.postgresql.org/about/): Sistema de gerenciamento de banco de dados relacional, utilizado para armazenar e persistir os dados da aplicação.
  - [Prisma ORM](https://www.prisma.io/): ORM (Object-Relational Mapping) de banco de dados, utilizado para facilitar a comunicação e manipulação de dados com o banco de dados PostgreSQL.

Essas tecnologias foram escolhidas para proporcionar uma experiência de desenvolvimento moderna, eficiente e escalável.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu computador:

- Node.js (versão 18.16 ou superior)
- NPM (versão 9.8 ou superior)

## Instalação

Siga as etapas abaixo para instalar, configurar e executar a API localmente:

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/nascimentoliveira/faq-back.git
   ```
2. Acesse o diretório do projeto:

   ```bash
   cd faq-back
   ```
3. Instale as dependências do projeto:

   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:Antes de executar a aplicação, é necessário configurar as variáveis de ambiente corretamente. Siga os passos abaixo:

   - Renomeie o arquivo `.env.example` para `.env`:
     ```bash
     mv .env.example .env
     ```
   - Agora, abra o arquivo `.env` em um editor de texto.
   - Procure a variável `DATABASE_URL` e defina-a com as configurações de acesso ao banco de dados. Exemplo:
     ```bash
     DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public
     ```
   - Verifique se existem outras variáveis de ambiente necessárias para o funcionamento da aplicação e defina-as de acordo com a sua configuração.
   - Salve o arquivo `.env`.

   *Certifique-se de não compartilhar o arquivo `.env` contendo informações sensíveis, como senhas, chaves de API ou tokens de acesso. Mantenha-o seguro e fora do controle de versão do seu repositório.*
5. Realize as migrações do Prisma ORM para criar a estrutura do banco de dados. Execute o seguinte comando:

   ```bash
   npm run dev:migration:run
   ```

   Isso aplicará as migrações pendentes no banco de dados especificado no arquivo `.env`, criando as tabelas e as relações necessárias.
6. Agora, a aplicação estará pronta para ser executada.

## Executando a API

Após a configuração, você pode iniciar a API executando o seguinte comando:

```bash
$ npm run start:dev
```

A API será iniciada e estará pronta para receber requisições e será iniciada na porta especificada no arquivo `.env` (por padrão, é a porta 5000).

```bash
  http://localhost:5000/faq
```

ou

```bash
  http://localhost:<porta_especificada>/faq
```

## Endpoints* 🛠

**Uma descrição detalhada desssa seção está sendo construída!*

A API da FAQ possui os seguintes endpoints disponíveis:

```
GET /faq/
```

```
GET /faq/:id
```

```
POST /faq
```

```
POST /faq/:id
```

```
PUT /faq/:id
```

```
DELETE /faq/:id
```

## Contribuição

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um `fork` do repositório.
2. Crie uma nova `branch` com a sua contribuição:
   ```bash
   git checkout -b <sua-contribuicao>
   ```
3. Faça as suas modificações  no código.
4. Faça `commit` das suas alterações:
   ```bash
   git commit -m "Sua contribuição"
   ```
5. Envie as alterações para o repositório remoto: .
   ```bash
   git push origin <sua-contribuicao>
   ```
6. Abra um `pull request` no repositório original, descrevendo as modificações realizadas.

Se te ajudei de alguma forma, ficarei feliz em saber. Se possível:
⭐️ dê uma estrela para este projeto; e
🪲 Encontre e relate `issues`

## Licença

Este projeto é licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

Disponibilizado por [Thiago Oliveira](https://www.linkedin.com/in/nascimentoliveira/).
