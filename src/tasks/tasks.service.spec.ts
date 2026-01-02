// Import des outils de test fournis par NestJS
import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService], // On déclare le service que l'on teste
    }).compile(); // Compilation du module pour pouvoir récupérer les instances

    // Récupération de l'instance réelle du service depuis le module
    service = module.get<TasksService>(TasksService);
  });

  // Déclaration d'un test
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
