# Image officielle Node (proche de ton Node local v22.12.0)
FROM node:22-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source (exclut node_modules et dist via .dockerignore)
COPY . .

# Si tu utilises TypeScript, builder le projet
RUN npm run build

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application compilée
CMD ["node", "dist/main.js"]

# # Commande pour démarrer l'application
# CMD ["npm", "start"]
