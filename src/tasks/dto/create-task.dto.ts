// Importation des décorateurs de validation depuis la librairie class-validator
// class-validator permet de **valider automatiquement les données reçues dans les DTOs**
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';

// Déclaration d'une classe DTO (Data Transfer Object)
// Un DTO est un **objet utilisé pour transférer et valider les données** entre le client et le serveur
export class CreateTaskDto {

    // Décorateur @IsNotEmpty()
    // Vérifie que la valeur n'est **pas vide** (null, undefined ou chaîne vide)
    @IsNotEmpty()

    // Décorateur @IsString()
    // Vérifie que la valeur est bien une **chaîne de caractères**
    @IsString()

    // Décorateur @MaxLength(100)
    // Vérifie que la chaîne n'excède pas **100 caractères**
    @MaxLength(100)

    // Déclaration du champ "title" de type string
    // Ce champ représente le **titre d'une tâche**
    title: string;


    // Même principe pour le champ "description"
    // @IsNotEmpty() → ne peut pas être vide
    @IsNotEmpty()

    // @IsString() → doit être une chaîne
    @IsString()

    // @MaxLength(500) → maximum 500 caractères
    @MaxLength(500)

    // Déclaration du champ "description"
    // Ce champ représente la **description détaillée de la tâche**
    description: string;
}

// | Terme / Décorateur           | Utilisation / Signification                                                                                                                 |
// | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
// | `DTO`                        | Data Transfer Object : objet qui sert à **transférer les données** entre le client et le serveur, souvent utilisé pour validation et typage |
// | `@IsNotEmpty()`              | Vérifie que le champ n’est pas vide                                                                                                         |
// | `@IsString()`                | Vérifie que le champ est une **chaîne de caractères**                                                                                       |
// | `@MaxLength(n)`              | Vérifie que la chaîne ne dépasse pas `n` caractères                                                                                         |
// | `@IsOptional()`              | Si utilisé, permet au champ d’être **facultatif** dans la requête (pas obligatoire)                                                         |
// | `export class CreateTaskDto` | Permet d’exporter la classe pour l’utiliser dans d’autres fichiers (controllers ou services)                                                |
