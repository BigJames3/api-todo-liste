// Import des outils de test fournis par NestJS
import { Test, TestingModule } from '@nestjs/testing';

// Import du service que l'on souhaite tester
import { TasksService } from './tasks.service';

// Déclaration d'une suite de tests pour TasksService
// "describe" est fourni par Jest (framework de test)
describe('TasksService', () => {

  // Variable pour contenir l'instance du service
  let service: TasksService;

  // "beforeEach" est exécuté avant chaque test de cette suite
  beforeEach(async () => {
    // Création d'un module de test NestJS
    // Ce module simule le module NestJS pour pouvoir injecter des providers
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService], // On déclare le service que l'on teste
    }).compile(); // Compilation du module pour pouvoir récupérer les instances

    // Récupération de l'instance réelle du service depuis le module
    service = module.get<TasksService>(TasksService);
  });

  // Déclaration d'un test
  it('should be defined', () => {
    // Vérifie que l'instance du service existe
    // Si service est undefined → le test échoue
    expect(service).toBeDefined();
  });

});


// | Terme / Concept              | Utilité                                                                                     |
// | ---------------------------- | ------------------------------------------------------------------------------------------- |
// | `describe()`                 | Regroupe logiquement plusieurs tests (ici pour TasksService)                                |
// | `it()`                       | Déclare un test individuel avec un message descriptif                                       |
// | `beforeEach()`               | Code exécuté avant chaque test pour initialiser l'environnement                             |
// | `Test.createTestingModule()` | Crée un **module NestJS simulé** pour tester des providers sans démarrer le serveur complet |
// | `.compile()`                 | Compile le module simulé pour pouvoir récupérer les instances                               |
// | `module.get<TasksService>()` | Récupère l'instance du service depuis le module                                             |
// | `expect().toBeDefined()`     | Assertion Jest pour vérifier que le service est bien instancié                              |
