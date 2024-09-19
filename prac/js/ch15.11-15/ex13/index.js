const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/api/generate', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post('http://localhost:11434/api/chat', {
            model: 'gemma2:2b',
            message: prompt,
        }, {
            responseType: 'stream'
        });
        console.log("debug")
        response.data.pipe(res);
    } catch (error) {
        console.error(error);
    }
});

