# Imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del backend
COPY package.json . 
COPY server.js .

# Instalar dependencias
RUN npm install

# Exponer el puerto 4000
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["npm", "start"]
