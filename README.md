# Console.blog("Hyunji.Kim")

*A modern full‑stack web application built with React, NestJS, and PostgreSQL*

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Built With](#built-with)
3. [Why These Technologies?](#why-these-technologies)
4. [Architecture Overview](#architecture-overview)
5. [Getting Started](#getting-started)
6. [Deployment with Docker](#deployment-with-docker)
7. [Roadmap](#roadmap)
8. [License](#license)
9. [Contact](#contact)

---

## About the Project

> **Status:** ⏳ *Client‑side 70 % complete – server API under active development.*

This repository hosts my Portfolio & Tech Blog, a full‑stack single‑page application where I showcase personal projects and publish study articles and technology news for fellow developers.
Key goals & features:

* ⚡ **Fast, responsive UI** built with React + Tailwind CSS
* 🗄️ **Robust REST/GraphQL API** powered by NestJS
* 🗂️ **Relational data** persisted in PostgreSQL
* 🚚 **Containerized deployment** via Docker (planned)
* ☁️ **Cloud hosting on AWS** (planned)

---

## Built With

| Layer      | Technology                                   | Purpose                                  |
| ---------- | -------------------------------------------- | ---------------------------------------- |
| **Client** | [React](https://react.dev)                   | Composable UI library for rich SPAs      |
|            | [React Router](https://reactrouter.com)      | Declarative routing & navigation         |
|            | [Tailwind CSS](https://tailwindcss.com)      | Utility‑first styling & design system    |
|            | [TypeScript](https://www.typescriptlang.org) | Static typing for reliability            |
| **Server** | [NestJS](https://nestjs.com)                 | Scalable Node.js framework (MVC)         |
|            | [PostgreSQL](https://www.postgresql.org)     | Reliable relational database             |
| **Ops**    | [Docker](https://www.docker.com) *(planned)* | Consistent dev & production environments |

---

## Why These Technologies?

### TypeScript – *Stability with Strong Types*

TypeScript adds a static type system to JavaScript, catching errors at compile time, improving IDE auto‑completion, and documenting intent. For a growing codebase and multiple contributors, this greatly reduces runtime bugs and speeds up onboarding.

### React – *Component‑Driven UI*

React’s declarative, component‑based approach makes it easy to build complex user interfaces that stay predictable as the application scales. Its large ecosystem (hooks, context, devtools) accelerates development.

### Tailwind CSS – *Rapid Styling without Context Switches*

Tailwind’s utility‑first classes let us style directly in JSX without leaving the component context, leading to faster iteration, consistent design tokens, and a smaller CSS bundle thanks to purging.

### React Router – *Seamless SPA Navigation*

React Router provides client‑side routing, code‑splitting support, and nested routes, enabling a true single‑page experience while maintaining accessible, shareable URLs.

---

## Architecture Overview

```
Browser ─┬─> React SPA (TypeScript, Tailwind, React Router)
        │
        └──> NestJS API (REST/GraphQL) ──> PostgreSQL
```

* **Client**: Communicates with the API using fetch/axios.
* **Server**: NestJS exposes modular controllers & services; data access handled via TypeORM.
* **Database**: PostgreSQL stores structured data with relational integrity.

> *Docker containers will orchestrate the above services in production. Final hosting is planned for AWS using container services such as ECS or Fargate once the server side is production‑ready.*

---

## Getting Started

### Prerequisites

* **Node.js ≥ 20**
* **npm or pnpm** (recommended)
* **PostgreSQL ≥ 15** running locally *(or Dockerized)*

```bash
# clone repo
$ git clone https://github.com/HyunjiiKim/hyunjiikim.github.io.git
$ cd <repo>

# install deps (client & server workspaces)
$ pnpm install

# copy env examples
$ cp packages/server/.env.example packages/server/.env
$ cp packages/client/.env.example packages/client/.env
```

Edit the `.env` files with your PostgreSQL connection string and any API secrets.

### Running Locally

```bash
# in one terminal – start the server
$ pnpm --filter server dev

# in another terminal – start the client
$ pnpm --filter client dev

# open http://localhost:5173 (Vite default)
```

The client runs on **Vite** (hot‑reload) while the NestJS server watches for changes with **ts‑node-dev**.

---

## Deployment with Docker

> **Coming soon** – a `docker-compose.yml` will spin up:
>
> 1. **client** – production‑built React static files served by Nginx
> 2. **server** – NestJS app
> 3. **postgres** – official Postgres image with volume for persistence

Once committed, deploy locally with:

```bash
$ docker compose up --build
```

---

## Roadmap

See the [open issues](https://github.com/HyunjiiKim/hyunjiikim.github.io/issues) for a full list of proposed features (and known bugs).

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---
https://github.com/HyunjiiKim/hyunjiikim.github.io
## Contact

**Hyunji Kim** [hjkim96727@gmail.com](mailto:hjkim96727@gmail.com)




