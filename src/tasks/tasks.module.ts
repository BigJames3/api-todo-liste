// Import du décorateur @Module depuis NestJS
import { Module } from '@nestjs/common';

// Import du controller lié aux tâches
import { TasksController } from './tasks.controller';

// Import du service qui contient la logique métier
import { TasksService } from './tasks.service';

// Déclaration d'un module NestJS
// Un module regroupe **controllers, services et autres providers**
@Module({
  // Déclaration des controllers qui appartiennent à ce module
  controllers: [TasksController],  

  // Déclaration des providers (services) qui seront injectés dans les controllers
  providers: [TasksService]  
})
export class TasksModule {} // Export du module pour pouvoir l'utiliser dans AppModule

// | Terme / Concept            | Utilité                                                                            |
// | -------------------------- | ---------------------------------------------------------------------------------- |
// | `@Module()`                | Décorateur NestJS qui transforme une classe en **module**                          |
// | `controllers`              | Liste des controllers gérés par ce module                                          |
// | `providers`                | Liste des services ou autres providers injectables disponibles dans ce module      |
// | `export class TasksModule` | Permet d’exporter ce module pour l’importer dans le module principal (`AppModule`) |
