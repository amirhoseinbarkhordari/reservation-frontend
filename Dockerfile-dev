FROM node:14-alpine

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN ["yarn"]

COPY .eslintrc.json .eslintrc.json
COPY tsconfig.json tsconfig.json
COPY next.config.js next.config.js
COPY pages pages
COPY modules modules

EXPOSE 3000

ENTRYPOINT ["yarn"]
CMD ["dev"]
