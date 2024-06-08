# Usa una imagen base oficial de Node.js de la versión 16
FROM node:18-alpine AS builder

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Usa una imagen base más ligera para el entorno de producción
FROM node:18-alpine AS runner

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de construcción desde la etapa anterior
COPY --from=builder /app/ ./

# Instala las dependencias de producción
RUN npm ci --only=production

# Expone el puerto 3000 para el contenedor
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]
