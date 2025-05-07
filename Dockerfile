# Utiliser une image Node.js légère comme base
FROM node:alpine

# Installer http-server globalement
RUN npm install -g http-server

# Copier les fichiers du site statique dans le répertoire de travail
COPY ./src /app

# Définir le répertoire de travail
WORKDIR /app

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer le serveur HTTP avec l'option pour désactiver l'affichage des répertoires
CMD ["http-server", "-p", "3000", "-d", "false"]
