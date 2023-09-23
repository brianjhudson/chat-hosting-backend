require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require("openai");
const {object, string, array, validate} = require('yup');
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const app = express();
app.use(bodyParser.json());


app.get("/", (req, res, next) => {
    return res.status(200).json("Hello world");
});

app.post("/send-message", async (req, res, next) => {
    let body;
    try {
        const bodySchema = object({
            model: string().required(),
            messages: array().of(object({
                role: string().required(),
                content: string().required()
            }))
        })
        body = await bodySchema.validate(req.body);
    }
    catch (e) {
        return res.status(400).json('Invalid input');
    }
    try {
        const chatCompletion = await openai.chat.completions.create(body);
      
        if (!chatCompletion || !chatCompletion.choices || !chatCompletion.choices[0] || !chatCompletion.choices[0].message) {
            return res.status(500).json({
                message: 'No response received from server'
            });
        }
        return res.status(200).json(chatCompletion.choices[0].message);
    } catch (e) {
        return res.status(500).json(e.message || 'Error processing response from server');
    }
});

app.listen(process.env.PORT || 3000, undefined, () => {
    console.log("App is listening on port 3000");
});