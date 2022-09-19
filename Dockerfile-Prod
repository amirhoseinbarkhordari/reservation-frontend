FROM node:14-alpine AS builder

WORKDIR /builder
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN ["yarn"]

COPY .eslintrc.json .eslintrc.json
COPY tsconfig.json tsconfig.json
COPY next.config.js next.config.js
COPY pages pages
COPY modules modules
RUN ["yarn", "build"]

FROM node:14-alpine AS server

WORKDIR /prod
COPY --from=builder /builder/.next .next
COPY --from=builder /builder/node_modules node_modules

EXPOSE 3000

ENTRYPOINT ["yarn"]
CMD ["start"]