const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    return res.status(200).json("Hello world");
});

app.post("/send-message", (req, res, next) => {
    console.log("This is where we send a message to Chat GPT");
    return res.status(200).json({
        message: "Response",
        history: ["1", "2"]
    });
});

app.listen(3000, undefined, () => {
    console.log("App is listening on port 3000");
});