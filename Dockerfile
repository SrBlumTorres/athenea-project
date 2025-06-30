# Usar una versión más reciente y específica
FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]