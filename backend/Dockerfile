# Build: pasang semua dependensi, kompilasi TypeScript ke dist/.
FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Runtime: hanya dependensi produksi, hasil build, dan folder migrasi SQL.
FROM node:20-alpine
WORKDIR /app
RUN corepack enable
ENV NODE_ENV=production
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY --from=build /app/dist ./dist
COPY --from=build /app/db/migrations ./db/migrations
EXPOSE 4000
# Web service memakai CMD ini. Worker di render.yaml menimpanya dengan `node dist/jobs/worker.js`.
CMD ["node", "dist/main.js"]
