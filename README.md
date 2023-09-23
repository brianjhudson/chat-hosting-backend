# Demo OpenAI Chat

## Purpose
This is a sample OpenAI chat server, for demonstration purposes only. It accepts input at a single endpoint, `send-message` in the format required by the [OpenAI documentation](https://platform.openai.com/docs/api-reference/introduction):


```
{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
}
```

The endpoint returns the first choice listed in the OpenAI response, as follows:

```
{
    "role": "assistant",
    "content": "\n\nThis is a test!"
}
```

## Instructions

1. Click on "Fork" at the top of this github repo and you'll have a copy in your own repository.
2. Click on "Code" and clone the repo to your desktop.
3. Open the project in an editor, like VSCode or IntelliJ.
4. Run `npm install`.
5. Add a .env file (`touch .env`).
6. Open `.env` and type your `OPENAI_API_KEY` in this blank file, as in the example below:
```
OPENAI_API_KEY=your_key
```
7. Run npm start
8. Open a terminal and curl the send-message endpoint:

```
curl -X POST http://localhost:3000 -H 'Content-Type: application/json' -d '{"model": "gpt-3.5-turbo","messages": [{"role": "user", "content": "Say this is a test!"}]}'
```

You should receive a response. Feel free to change the messages to get new responses.

This project is for demonstration purposes only and is governed under the terms of the MIT license, included in this repo. 