import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const prompt = `Analyze the sentiment of the text: ${text}`;

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: prompt,
        max_tokens: 60
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });

      res.status(200).json({ response: response.data.choices[0].text });
    } catch (error) {
      res.status(500).json({ error: 'Error in calling OpenAI API' });
    }
  } else {
    res.status(405).end();
  }
}
