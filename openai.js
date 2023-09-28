require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.W3I_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Say this is a test!"}],
        temperature: 0.7
        // max_tokens: 256,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
    });
const answer = response.data.choices[0].text;
console.log(answer);
}

//Ask an example question
ask("What are the names of the planets in the solar system?");