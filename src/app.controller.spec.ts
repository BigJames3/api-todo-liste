// Import des outils de test NestJS
import { Test, TestingModule } from '@nestjs/testing';

// Import du controller et du service que l'on souhaite tester
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Déclaration d'une suite de tests pour AppController
describe('AppController', () => {

  // Variable pour contenir l'instance du controller
  let appController: AppController;

  // "beforeEach" est exécuté avant chaque test
  beforeEach(async () => {
    // Création d'un module de test NestJS
    // Ce module simule le module Nest complet pour tester les controllers/services
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Controller à tester
      providers: [AppService],      // Service injecté dans le controller
    }).compile(); // Compilation du module

    // Récupération de l'instance réelle du controller depuis le module
    appController = app.get<AppController>(AppController);
  });

  // Regroupe les tests relatifs à la route racine
  describe('root', () => {
    // Déclaration d'un test
    it('should return "Hello World!"', () => {
      // Vérifie que la méthode getHello() renvoie bien "Hello World!"
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

});

// | Terme / Concept              | Utilité                                                                                    |
// | ---------------------------- | ------------------------------------------------------------------------------------------ |
// | `describe()`                 | Regroupe logiquement plusieurs tests (ici pour AppController et la route racine)           |
// | `it()`                       | Déclare un test individuel avec un message descriptif                                      |
// | `beforeEach()`               | Code exécuté avant chaque test pour préparer l'environnement                               |
// | `Test.createTestingModule()` | Crée un module simulé NestJS pour tester les controllers/services sans démarrer le serveur |
// | `.compile()`                 | Compile le module simulé pour récupérer les instances réelles                              |
// | `app.get<AppController>()`   | Récupère l'instance du controller depuis le module simulé                                  |
// | `expect(...).toBe(...)`      | Assertion Jest pour vérifier le résultat attendu                                           |
