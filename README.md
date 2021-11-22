# advance5task1
config for connect sql
 host: '127.0.0.1',
    user: 'enter your user',
    password: 'enter your password',
    database: 'notedb',
    appPort: 3306
    
    work for API Examples
    get http://localhost:3500/api/tasks
    post http://localhost:3500/api/tasks 
    body
    {
        "task": "10",
        "taskDescription": "11"
    }
    
    put http://localhost:3500/api/tasks/(id);
    delete http://localhost:3500/api/tasks/(id);
