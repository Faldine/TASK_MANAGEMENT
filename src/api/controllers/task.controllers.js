const { getAllTask,createTask } = require('../services/task.services');

// Toutes les taches
const getAll = async (req, res) => {
    try {
        const task = await getAllTask();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer une nouvelle tache
const createNewtask = async (req, res) => {
    try {
        //const newTask = await TaskService.createTask(req.body);
        const newtask = await createTask(req.body);
        res.status(201).json(newArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Récupérer une tache par ID
const getTaskById = async (req, res) => {
    try {
        const task = await task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour toutes les taches
const updateTask = async (req, res) => {
    try {
        const updatedTask = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer une tache
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted sucessfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAll,
    createNewtask,
    getTaskById,
    updateTask,
    deleteTask
}
