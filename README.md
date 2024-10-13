# smartflow

Smartflow is no-code plateform for solidity built around the EIP project at EPITECH.

## Quick Start

1. Start by importing the code in your local machine.

```sh
git clone git@github.com:FredeAlexandre/smartflow.git
```

2. Install dependencies

```sh
pnpm install
```

3. Add the environment variables

```sh
# Copy environement variables
cp .env.example .env
```

4. Start the development server

> You need a Docker deamon running

```sh
pnpm dev
```

## Useful commands

#### Install dependencies in specific package

```sh
# pnpm add --filter <package> <dependency>
pnpm add --filter website react
```
