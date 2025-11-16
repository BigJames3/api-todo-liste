// Import des décorateurs nécessaires depuis NestJS
// Controller → pour déclarer la classe comme controller
// Get → pour créer une route HTTP GET
import { Controller, Get } from '@nestjs/common';

// Import du service associé au controller
import { AppService } from './app.service';

// Déclaration du controller principal de l'application
@Controller() // Pas de préfixe → route racine "/"
export class AppController {

  // Injection du service via le constructeur
  // "private readonly" → accessible uniquement dans cette classe et non modifiable
  constructor(private readonly appService: AppService) {}

  // Déclaration d'une route GET "/"
  @Get()
  getHello(): string {
    // Appelle la méthode getHello() du service pour obtenir la réponse
    return this.appService.getHello();
  }
}


// | Terme / Concept                                        | Utilité                                                                          |
// | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
// | `@Controller()`                                        | Transforme la classe en controller NestJS et permet de définir des routes        |
// | `@Get()`                                               | Déclare une route HTTP GET accessible à l’URL correspondante (ici la racine "/") |
// | `constructor(private readonly appService: AppService)` | Injection de dépendance du service pour utiliser sa logique métier               |
// | `getHello(): string`                                   | Méthode exposée via la route GET, qui renvoie une chaîne de caractères           |
// | `return this.appService.getHello()`                    | Appelle le service pour obtenir la réponse et l’envoyer au client                |
