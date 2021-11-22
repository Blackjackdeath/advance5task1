const express = require('express');
const rout= express.Router()

const taskController = require('../componets/tasks/taskControler.js');

module.exports=()=>{
    rout.get('/', taskController.getAllTasks);
    rout.post('/', taskController.createTask);
    rout.put('/:id', taskController.updateTask);
    rout.delete('/:id', taskController.deleteTask);

    return rout;
}