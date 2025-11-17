// Import des outils de test de NestJS
import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
// Import du controller à tester
import { TasksController } from './tasks.controller';


// Déclaration d'une suite de tests pour le controller "TasksController"
// "describe" est fourni par Jest (framework de test)
describe('TasksController', () => {

  // Déclaration d'une variable qui contiendra l'instance du controller
  let controller: TasksController;
  let service: TasksService;

  // "beforeEach" est exécuté avant chaque test de cette suite
  beforeEach(async () => {
    // Création d'un module de test NestJS
    // TestingModule simule le module Nest pour les tests
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController], // on déclare le controller à tester
      providers: [TasksService], // OBLIGATOIRE pour injecter le service
    }).compile(); // compile le module pour l'utiliser

    // Récupération de l'instance du controller depuis le module de test
    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  // Déclaration d'un test
  it('should be defined', () => {
    // Vérifie que l'instance du controller existe
    // Si controller est undefined → le test échoue
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
