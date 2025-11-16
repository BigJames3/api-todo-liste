// Déclaration d'une classe "Task"
// Cette classe représente **une tâche** dans ton application
export class Task {

  // id : numéro unique de la tâche
  // Sert à identifier chaque tâche dans la base de données ou dans un tableau
  id: number;

  // title : titre de la tâche
  // Type string pour stocker le nom ou l'intitulé de la tâche
  title: string;

  // description : description détaillée de la tâche
  // Type string pour expliquer ce qu'il faut faire
  description: string;

  // isCompleted : état de la tâche
  // Type boolean (true/false) pour savoir si la tâche est terminée ou non
  isCompleted: boolean;

  // createdAt : date de création de la tâche
  // Permet de savoir quand la tâche a été ajoutée
  // Type Date
  // Commenté pour l'instant, mais peut être utilisé si tu veux suivre la date
  // createdAt: Date;
}

// | Champ / Terme          | Utilisation / Signification                                                |
// | ---------------------- | -------------------------------------------------------------------------- |
// | `export class Task`    | Permet d’exporter la classe pour l’utiliser ailleurs (controller, service) |
// | `id: number`           | Identifiant unique de la tâche                                             |
// | `title: string`        | Nom ou titre de la tâche                                                   |
// | `description: string`  | Détails ou description de la tâche                                         |
// | `isCompleted: boolean` | Etat de la tâche (terminée ou non)                                         |
// | `createdAt: Date`      | Date de création (utile pour historique ou tri)                            |
