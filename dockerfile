FROM node:22.0.0-alpine

WORKDIR /tmp/app/midas

COPY . /tmp/app/midas

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000



