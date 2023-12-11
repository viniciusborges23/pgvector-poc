const { OpenAI } = require('openai');
const { config } = require('dotenv');
config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = { openai };
