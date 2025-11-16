// Import des décorateurs et exceptions de NestJS
import { Injectable, NotFoundException } from '@nestjs/common';

// Import du modèle Task qui représente la structure d'une tâche
import { Task } from './task.model';

// Import du DTO utilisé pour la création d'une tâche
import { CreateTaskDto } from './dto/create-task.dto';

// Décorateur @Injectable() indique que cette classe peut être injectée dans un controller
@Injectable()
export class TasksService {

    // Stockage temporaire des tâches en mémoire (tableau)
    private tasks: Task[] = [];

    // Compteur pour générer des ID uniques pour chaque tâche
    private idCounter = 1;

    // Méthode pour récupérer toutes les tâches
    findAll(): Task[] {
        return this.tasks;
    }

    // Méthode pour récupérer une tâche par son ID
    findOne(id: number): Task {
        // Recherche la tâche dans le tableau
        const task = this.tasks.find(task => task.id === id);

        // Si aucune tâche trouvée, on lance une exception
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        // Retourne la tâche trouvée
        return task;
    }

    // Méthode pour créer une nouvelle tâche
    create(dto: CreateTaskDto): Task {
        // Création de l'objet Task
        const task: Task = {
            id: this.idCounter++,           // ID unique auto-incrémenté
            title: dto.title,               // Titre depuis le DTO
            description: dto.description,   // Description depuis le DTO
            isCompleted: false,             // Par défaut, la tâche n'est pas terminée
            // createdAt: new Date(),       // Date de création (commentée pour l'instant)
            // updatedAt: new Date(),       // Date de mise à jour (commentée pour l'instant)
        };

        // Ajoute la tâche dans le tableau
        this.tasks.push(task);

        // Retourne la tâche créée
        return task;
    }

    // Méthode pour mettre à jour une tâche existante
    update(id: number, dto: Partial<CreateTaskDto>): Task {
        // Récupère la tâche existante
        const task = this.findOne(id);

        // Met à jour les champs si fournis, sinon conserve l'ancien
        task.title = dto.title ?? task.title;
        task.description = dto.description ?? task.description;

        // Retourne la tâche mise à jour
        return task;
    }

    // Méthode pour supprimer une tâche
    delete(id: number) {
        const len = this.tasks.length; // Stocke la taille avant suppression

        // Filtre le tableau pour retirer la tâche avec l'ID fourni
        this.tasks = this.tasks.filter(task => task.id !== id);

        // Si aucune suppression n'a eu lieu, la tâche n'existait pas
        if (this.tasks.length === len) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        // Retourne un message de succès
        return { message: `Task with ID ${id} deleted successfully` };
    }
}


// | Terme / Concept                                   | Utilité                                                                |
// | ------------------------------------------------- | ---------------------------------------------------------------------- |
// | `@Injectable()`                                   | Rend la classe **injectable** dans un controller                       |
// | `private tasks: Task[]`                           | Tableau en mémoire pour stocker temporairement les tâches              |
// | `idCounter`                                       | Compteur auto-incrémenté pour générer des ID uniques                   |
// | `findAll()`                                       | Retourne toutes les tâches                                             |
// | `findOne(id: number)`                             | Retourne une tâche par ID, ou lance `NotFoundException` si non trouvée |
// | `create(dto: CreateTaskDto)`                      | Crée une nouvelle tâche en utilisant le DTO validé                     |
// | `update(id: number, dto: Partial<CreateTaskDto>)` | Met à jour une tâche existante, champs facultatifs                     |
// | `delete(id: number)`                              | Supprime une tâche par ID, lance exception si non trouvée              |
