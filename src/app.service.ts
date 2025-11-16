// Import du décorateur Injectable depuis NestJS
// Ce décorateur permet à NestJS d'injecter ce service dans un controller
import { Injectable } from '@nestjs/common';

// Décorateur @Injectable() : rend la classe injectable
@Injectable()
export class AppService {

  // Méthode qui renvoie une chaîne de caractères
  // Cette méthode sera appelée par le controller pour répondre aux requêtes
  getHello(): string {
    return 'Hello World!'; // Retourne simplement "Hello World!"
  }
}

// | Terme / Concept           | Utilité                                                                                                              |
// | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
// | `@Injectable()`           | Rend la classe **injectable**, c’est-à-dire qu’elle peut être utilisée par un controller via injection de dépendance |
// | `export class AppService` | Déclare le service principal de l’application                                                                        |
// | `getHello(): string`      | Méthode exposée que le controller appelle pour obtenir une réponse                                                   |
