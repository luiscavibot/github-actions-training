FROM node:18-alpine 

WORKDIR /app

COPY . .

#Instalar solo las dependencias de producción y de manera limpia 
RUN npm ci --only=production

ARG BUILD_DIRECTORY
ENV BUILD_DIRECTORY=$BUILD_DIRECTORY

EXPOSE 3000

CMD ["npm", "start"]
