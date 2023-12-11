const { openai } = require('./services/openai');

async function createEmbedding(input) {
  try {
    const { data } = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input,
    });

    return data[0].embedding;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createEmbedding,
};
