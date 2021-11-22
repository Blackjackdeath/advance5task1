const Router= require('express').Router;

const tasks= require('../routs/taskRoute.js');

module.exports=()=>{
    const routing = Router();
    routing.use('/tasks', tasks());
    return routing;
}