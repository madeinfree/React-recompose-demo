FROM node:8-slim
ADD . /www
WORKDIR /www
RUN npm install yarn --global && yarn && npm run build
CMD ["node", "server/server.js"]
