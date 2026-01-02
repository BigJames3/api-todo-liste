import { ValidationPipe } from '@nestjs/common';

// Import de NestFactory pour créer une application NestJS
import { NestFactory } from '@nestjs/core';

// Import du module principal de l'application
import { AppModule } from './app.module';

// Fonction asynchrone qui démarre l'application
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // Lancement du serveur sur le port défini dans la variable d'environnement ou 3000 par défaut
  await app.listen(process.env.PORT ?? 3000);
}

// Appel de la fonction bootstrap pour démarrer le serveur
bootstrap();