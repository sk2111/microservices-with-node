const express = require('express');
const axios = require('axios');

const app = express();



app.use(express.json());


app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const { content, ...rest } = data;

        const status = content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                ...rest, status, content
            }
        })
    }
    res.send({});
});


app.listen(4003, () => {
    console.log("Moderation listening on 4003");
});