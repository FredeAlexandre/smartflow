FROM node:22-alpine3.19 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM base AS build

COPY ../../ /monorepo

WORKDIR /monorepo

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=nextjs --prod /prod/nextjs

FROM base AS nextjs

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=build /prod/nextjs/public ./apps/nextjs/public
COPY --from=build --chown=nextjs:nodejs /prod/nextjs/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /prod/nextjs/.next/static ./apps/nextjs/.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME=0.0.0.0 node apps/nextjs/server.js
