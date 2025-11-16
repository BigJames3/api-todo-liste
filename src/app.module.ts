// Import du décorateur @Module depuis NestJS
import { Module } from '@nestjs/common';

// Import du controller principal de l'application
import { AppController } from './app.controller';

// Import du service principal de l'application
import { AppService } from './app.service';

// Import du module des tâches pour l'intégrer dans l'application
import { TasksModule } from './tasks/tasks.module';

// Déclaration du module principal de l'application
@Module({
  // "imports" : autres modules que l'on veut utiliser dans ce module
  imports: [TasksModule], // Ici, on importe TasksModule pour rendre toutes ses routes et services disponibles

  // "controllers" : liste des controllers gérés par ce module
  controllers: [AppController], // Le controller principal, exposant la route racine "/"

  // "providers" : liste des services ou providers injectables
  providers: [AppService], // Le service principal de l'application
})
export class AppModule {} // Export du module principal pour que NestJS puisse le démarrer

// | Terme / Concept                | Utilité                                                                                                    |
// | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
// | `@Module()`                    | Transforme la classe en **module NestJS**. Chaque module regroupe controllers, services et autres modules. |
// | `imports: [TasksModule]`       | Permet d’utiliser les fonctionnalités d’un autre module (routes, services…).                               |
// | `controllers: [AppController]` | Déclare les controllers exposés par ce module.                                                             |
// | `providers: [AppService]`      | Déclare les services injectables utilisés par les controllers.                                             |
// | `export class AppModule`       | Le module principal que NestJS utilise pour **démarrer l’application**.                                    |
