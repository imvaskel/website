FROM node:lts-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /opt/app
COPY package.json yarn.lock .yarnrc.yml ./
# Cursed
RUN corepack enable && \
    corepack prepare $(grep -o "yarn@[0-9].[0-9].[0-9]" package.json) && \
    yarn install --immutable

FROM node:lts-alpine AS builder

ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
WORKDIR /opt/app

COPY . .
RUN corepack enable && \
    corepack prepare $(grep -o "yarn@[0-9].[0-9].[0-9]" package.json) 
COPY --from=deps /opt/app/node_modules ./node_modules
RUN yarn build

FROM node:lts-alpine AS runner

WORKDIR /opt/app
ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start", "-H", "0.0.0.0"]
