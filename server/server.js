const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller/tasksController');

const app = new express();
app.use(bodyParser.jason());

app.post('/api/task', controller);
app.get('/api/tasks', controller.read);
app.put('/api/task/:id', controller.update);
app.put('/api/complete/:id', controller.complete);
app.delete('/api/task/:id', controller.delete);





const port = 1337;

app.listen(port, () =>{
    console.log(`Shaking and baking and keeping it ${1337}`)
})