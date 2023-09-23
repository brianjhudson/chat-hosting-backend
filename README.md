# Demo OpenAI Chat

This is a sample OpenAI chat server. It accepts input at a single endpoint, `send-message` in the format required by the [OpenAI documentation](https://platform.openai.com/docs/api-reference/introduction):


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

This project is for demonstration purposes only and is governed under the terms of the MIT license, included in this repo. 