const TaskModel = require('../models/task.models');
// Afficher tous les articles
const getAllTask = async () => {
    await TaskModel.find()
};

// create article
const createTask = async (data) => {
    const newTask = await TaskModel.create(data);
    return newTask;
};


module.exports = {getAllTask, createTask }