const express = require('express');

const server = express();

server.use(express.json());

const lessons = ['lesson1', 'lesson2', 'lesson3'];

// Return a lesson

server.get('/lessons/:index', (req, res) => {
    const { index } = req.params;

    return res.json(lessons[index]);
})

// Retunr all lessons

server.get('/lessons', (req, res) => {
    return res.json(lessons);
})

// insert a lesson

server.post('/lessons', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(lessons);
})

// update a lesson

server.put('/lessons/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    lessons[index] = name;

    return res.json(lessons);

})

// Delete a lesson

server.delete('/lessons/:index', (req, res) => {
    const { index } = req.params;

    lessons.splice(index, 1);
    return res.json({message: "Deleted"});
})

server.listen(3001);

