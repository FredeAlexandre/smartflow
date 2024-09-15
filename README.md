# smartflow

Smartflow is no-code plateform for solidity built around the EIP project at EPITECH.

## Quick Start

1. Start by importing the code in your local machine.

```sh
git clone git@github.com:FredeAlexandre/smartflow.git
```

2. Start pocketbase from the docker compose file

> You need a Docker deamon running

```sh
docker compose up pocketbase
```

3. Start the web app

```sh
# Install dependencies
pnpm install

# Copy environement variables
cp .env.example .env

# Start the dev scripts
pnpm dev
```

## Files and folders

This is the content of the repository

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  └─ next.js
      └─ The main web application of the repository
packages
  ├─ pocketbase
  |   └─ A suit of react tools to use pocketbase typesafely
  ├─ validator
  |   └─ A suit of zod schema to validate types in the project
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
docker-images
  ├─ monorepo-apps
  |   └─ A dockerfile containing the apps of the monorepo
  └─ pocketbase
      └─ A dockerfile for pocketbase
```
