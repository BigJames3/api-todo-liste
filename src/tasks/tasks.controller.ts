import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';

import { TasksService } from './tasks.service';

import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')  // Préfixe commun à toutes les routes de ce controller : /tasks
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    @Get()
    getAllTasks() {
        return this.tasksService.findAll(); // Appelle le service pour obtenir toutes les tâches
    }

    // GET /tasks/:id → récupérer une tâche par son ID
    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id: number) {
        // @Param('id', ParseIntPipe) : récupère le paramètre 'id' et le convertit en nombre
        return this.tasksService.findOne(id); // Appelle le service pour récupérer la tâche
    }

    // POST /tasks → créer une nouvelle tâche
    @Post()
    createTask(@Body() dto: CreateTaskDto) {
        // @Body() : récupère le corps de la requête et le valide avec CreateTaskDto
        return this.tasksService.create(dto); // Appelle le service pour créer la tâche
    }

    // PATCH /tasks/:id → mettre à jour une tâche
    @Patch(':id')
    updateTask(
        @Param('id', ParseIntPipe) id: number,      // Récupère et convertit l'id
        @Body() dto: Partial<CreateTaskDto>,        // Récupère le corps de la requête
    ) {
        // Partial<CreateTaskDto> : tous les champs sont facultatifs pour la mise à jour
        return this.tasksService.update(id, dto); // Appelle le service pour mettre à jour
    }
    
    // DELETE /tasks/:id → supprimer une tâche
    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id: number) {
        return this.tasksService.delete(id); // Appelle le service pour supprimer la tâche
    }

}
