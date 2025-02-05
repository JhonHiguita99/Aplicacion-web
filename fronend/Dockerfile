# Imagen base de Nginx
FROM nginx:alpine

# Instalar Git para clonar el repositorio
RUN apk add --no-cache git

# Clonar el repositorio de GitHub
RUN git clone https://github.com/usuario/repositorio.git /usr/share/nginx/html

# Eliminar archivos predeterminados de Nginx (opcional si están presentes)
RUN rm -rf /usr/share/nginx/html/index.html

# Copiar el archivo HTML del repositorio al directorio de Nginx
# (Si ya está en la raíz del repositorio, este paso no es necesario)
# COPY /usr/share/nginx/html/repositorio/index.html /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
 