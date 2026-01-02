import { Module } from '@nestjs/common';

import { TasksController } from './tasks.controller';

import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],  

  providers: [TasksService]  
})
export class TasksModule {} // Export du module pour pouvoir l'utiliser dans AppModule
