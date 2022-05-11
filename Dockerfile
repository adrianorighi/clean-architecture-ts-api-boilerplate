FROM node:14-alpine

WORKDIR /usr/local/api

COPY package*.json tsconfig*.json tsoa.json ./

RUN yarn

COPY src/ src/

COPY docs/ docs/

RUN yarn build

RUN rm -r src/

EXPOSE 5000

CMD ["node", "dist/main/server.js"]
