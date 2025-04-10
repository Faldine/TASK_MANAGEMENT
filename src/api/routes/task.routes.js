const {  getAll,createNewtask,getTaskById,updateTask,deleteTask,} = require("../controllers/task.controllers");
const express = require ("express");
const router = express.Router();

// Routes
router.get('/', (req, res) => getAll(req, res));
router.post('/task', (req, res) => createNewTask(req, res));
router.get('/task/:id',(req, res) => getTaskById(req, res));
router.put('/task/:id',(req, res) => updateTask(req, res)) 
router.delete('/task/:id/delete', (req, res) => deleteTask(req, res))
    

module.exports = router;


