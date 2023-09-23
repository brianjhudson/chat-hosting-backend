require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const instance = axios.create({
    baseURL: 'https://api.openai.com/v1/chat/completions',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${process.env.CHAT_KEY}`}
});

app.get("/", (req, res, next) => {
    return res.status(200).json("Hello world");
});

app.post("/send-message", async (req, res, next) => {
    const chatGPT = await axios.post(res.body);
    console.log("This is where we send a message to Chat GPT");
    return res.status(200).json({
        message: "Response",
        history: ["1", "2"]
    });
});

app.listen(process.env.PORT || 3000, undefined, () => {
    console.log("App is listening on port 3000");
});