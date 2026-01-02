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


// | Terme / Concept                 | Utilité                                                                                            |
// | ------------------------------- | -------------------------------------------------------------------------------------------------- |
// | `describe()`                    | Permet de **regrouper des tests** logiquement (ici pour `TasksController`)                         |
// | `it()`                          | Déclare un **test individuel** avec un message descriptif                                          |
// | `beforeEach()`                  | Code exécuté avant chaque test (préparer l’environnement)                                          |
// | `Test.createTestingModule()`    | Crée un **module NestJS simulé** pour tester controllers/services sans démarrer le serveur complet |
// | `.compile()`                    | Compile le module de test pour pouvoir récupérer des instances                                     |
// | `module.get<TasksController>()` | Récupère l'instance réelle du controller depuis le module simulé                                   |
// | `expect().toBeDefined()`        | Assertion Jest : vérifie que l'objet n'est pas `undefined`                                         |
