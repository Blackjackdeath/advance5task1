
const mysql = require('mysql');

const config = require('../../../config/app.js');

const connection = mysql.createConnection(config);

const validationTask = (newTask) => {
    const { task, taskDescription } = newTask;
    const taskRow = { task, taskDescription };
    for (let prop in taskRow) {
        if (taskRow.hasOwnProperty(prop) && taskRow[prop] === undefined) {
            return false;
        };
    };
    if (taskRow.task.length > 50) {
        return false;
    };
    return taskRow;
};


const getAllTasks = (req, res) => {
    connection.query(
        `select * from noteTable`,
        (err, result) => {
            if (err === null) {
                res.status(200).json(result);
            }
            else {
                res.status(500).json(err);
            };
        });
};

const createTask = (req, res) => {
    const taskRow = validationTask(req.body);
    if (!taskRow) {
        return res.status(400).json({ message: 'Please, fill all fields' });
    };
    connection.query(
        `insert into noteTable (task, taskDescription) values ('${taskRow.task}','${taskRow.taskDescription}')`,
        (err, result) => {
            if (err === null) {
                res.status(200).json({ message: 'Task add' });
            }
            else {
                res.status(500).json(err);
            }
        });
};

const updateTask = (req, res) => {
    const { task, taskDescription } = req.body;
    const updateTask = { task, taskDescription };
    let query = '';
    for (let prop in updateTask) {
        if (updateTask[prop] === undefined) {
            delete updateTask[prop];
        }
        else {
            if (query === '') {
                query += `${prop}='${updateTask[prop]}'`;
            }
            else {
                query += `, ${prop}='${updateTask[prop]}'`;
            };
        };
    };
    connection.query(
        `update noteTable set ${query} where id=${req.params.id}`,
        (err, result) => {
            if (err === null) {
                if(result.changedRows===0){
                    res.status(400).json({message:'Row not find'});
                }else{
                    res.status(200).json({message:'Update successfully'});
                }
                
            }
            else {
                res.status(500).json(err);
            }
        });
};

const deleteTask = (req, res) => {
    connection.query(
        `delete from noteTable where  id=${req.params.id}`,
        (err, result) => {
            if (err === null) {
                if (result.affectedRows===0){
                    res.status(400).json({message:'Row not find'});
                }
                else{
                    res.status(200).json({message:'Deleted'});
                }
            }
            else {
                res.status(500).json(err);
            }
        });
    
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};