FROM node:18-alpine 

WORKDIR /app

COPY . .

#Instalar solo las dependencias de producción y de manera limpia 
RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
