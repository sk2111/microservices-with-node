const express = require('express');
const cors = require('cors');
const { randomBytes } = require('crypto');
const app = express();
const axios = require('axios');

const posts = {};

app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };
    await axios.post('http://localhost:4005/events', { type: 'PostCreated', data: posts[id] });
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Event received', req.body.type);
    res.send({});
});

app.listen(4000, () => {
    console.log("Listenening on 4000");
});