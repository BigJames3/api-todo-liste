// Import des outils de test de NestJS
import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {

  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController], // on déclare le controller à tester
      providers: [TasksService], // OBLIGATOIRE pour injecter le service
    }).compile(); // compile le module pour l'utiliser

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  // Déclaration d'un test
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});