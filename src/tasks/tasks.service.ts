import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    // Compteur pour générer des ID uniques pour chaque tâche
    private idCounter = 1;

    // Méthode pour récupérer toutes les tâches
    findAll(): Task[] {
        return this.tasks;
    }

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
            id: this.idCounter++,           
            title: dto.title,               
            description: dto.description,   
            isCompleted: false,             
            // createdAt: new Date(),       
            // updatedAt: new Date(),       
        };

        // Ajoute la tâche dans le tableau
        this.tasks.push(task);

        // Retourne la tâche créée
        return task;
    }

    // Méthode pour mettre à jour une tâche existante
    update(id: number, dto: Partial<CreateTaskDto>): Task {
        const task = this.findOne(id);

        // Met à jour les champs si fournis, sinon conserve l'ancien
        task.title = dto.title ?? task.title;
        task.description = dto.description ?? task.description;
        return task;
    }

    // Méthode pour supprimer une tâche
    delete(id: number) {
        const len = this.tasks.length; // Stocke la taille avant suppression

        this.tasks = this.tasks.filter(task => task.id !== id);

        // Si aucune suppression n'a eu lieu, la tâche n'existait pas
        if (this.tasks.length === len) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        // Retourne un message de succès
        return { message: `Task with ID ${id} deleted successfully` };
    }
}