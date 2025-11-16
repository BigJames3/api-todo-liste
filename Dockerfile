# Image Node officielle (runtime pour exécuter JS côté serveur)
FROM node:v20

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers nécessaires à l'installation
COPY package*.json ./

# Installation des dépendances Node
RUN npm install

# Copie du reste du code source
COPY . .

# Exposition du port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
