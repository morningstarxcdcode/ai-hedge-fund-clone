import axios from 'axios';

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

// Generate market insights using OpenAI GPT API
export async function generateMarketInsights(prompt) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + OPENAI_API_KEY,
  };
  const data = {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful financial market assistant.' },
      { role: 'user', content: prompt },
    ],
    max_tokens: 500,
    temperature: 0.7,
  };

  try {
    const response = await axios.post(url, data, { headers });
    const message = response.data.choices[0].message.content;
    return message;
  } catch (error) {
    console.error('Error generating market insights:', error);
    return null;
  }
}
