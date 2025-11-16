// Import du ValidationPipe de NestJS
// Permet de valider automatiquement les données reçues dans les DTO
import { ValidationPipe } from '@nestjs/common';

// Import de NestFactory pour créer une application NestJS
import { NestFactory } from '@nestjs/core';

// Import du module principal de l'application
import { AppModule } from './app.module';

// Fonction asynchrone qui démarre l'application
async function bootstrap() {

  // Création de l'application NestJS à partir du module principal
  const app = await NestFactory.create(AppModule);

  // Application globale de ValidationPipe
  // ✅ Cela valide automatiquement toutes les requêtes entrantes
  // Exemple : DTOs, types, champs obligatoires
  app.useGlobalPipes(new ValidationPipe());

  // Lancement du serveur sur le port défini dans la variable d'environnement ou 3000 par défaut
  await app.listen(process.env.PORT ?? 3000);
}

// Appel de la fonction bootstrap pour démarrer le serveur
bootstrap();

// | Terme / Concept                 | Utilité                                                                                              |
// | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
// | `NestFactory.create(AppModule)` | Crée une instance complète de l'application NestJS basée sur `AppModule`                             |
// | `ValidationPipe`                | Valide automatiquement les DTOs envoyés dans les requêtes (ex: `@IsNotEmpty()`)                      |
// | `app.useGlobalPipes()`          | Permet d’appliquer le pipe de validation à **toutes les routes**                                     |
// | `process.env.PORT ?? 3000`      | Définit le port : si la variable d'environnement `PORT` existe → on l'utilise, sinon 3000 par défaut |
// | `await app.listen(...)`         | Démarre le serveur HTTP et écoute les requêtes entrantes                                             |
// | `bootstrap()`                   | Fonction asynchrone principale qui démarre l’application                                             |
