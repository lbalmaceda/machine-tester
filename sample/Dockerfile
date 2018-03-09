FROM node:8.7-alpine

WORKDIR /home/app

ADD package.json /home/app
RUN npm install
ADD . /home/app

EXPOSE 3000

CMD ["npm", "start"]
