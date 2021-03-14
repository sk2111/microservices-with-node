const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();

const commmentsByPostId = {};


app.use(cors());
app.use(express.json());


app.get('/posts/:id/comments', (req, res) => {
    res.send(commmentsByPostId[req.params.id] ?? []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commmentsByPostId[req.params.id] ?? [];
    comments.push({ id: commentId, content });

    commmentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen('4001', () => {
    console.log("listeneing on 4001");
})