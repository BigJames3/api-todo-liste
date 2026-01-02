import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [TasksModule], // Ici, on importe TasksModule pour rendre toutes ses routes et services disponibles
  controllers: [AppController], // Le controller principal, exposant la route racine "/"
  providers: [AppService], // Le service principal de l'application
})
export class AppModule {} // Export du module principal pour que NestJS puisse le démarrer
