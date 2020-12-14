const express = require('express')
const bodyParser = require('body-parser')

const server = express();

server.use(bodyParser.json());
// CRUD (create, read, update, delete)
const users = [
    {
        id: "hello",
        name: "yura",
        email:"yuracho@gmail.com"
    },
    {
        id:"world",
        name:"hi",
        email:"aa@gmail.com"
    }
];

server.get('/api/user', (req, res) => {
    res.json(users)
});

server.get('/api/user/:id', (req, res) => {
    const user = users.find((u) => {
        return u.id === req.params.id;
    });
    if(user){
        res.json(user);
    }else{
        res.status(404).json({errorMessage:'User was not found'})
    }
});

server.put('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u=>u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404).json({errorMessage: 'User was not found'})
    }else{
        users[foundIndex] = {...user[foundIndex], ...req.body}
        res.json(users[foundIndex]);
    }
});

server.delete('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404).json({errorMessage:'User was not found'});
    }else{
        let foundUser = users.splice(foundIndex, 1);
        res.json(foundUser[0]);
    }
})

server.post("/api/user", (req, res) => {
   users.push(req.body);
    res.json(users);
})
server.listen(3000, ()=> {
    console.log('server is running');
})