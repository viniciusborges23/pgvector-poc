const { createEmbedding } = require('./createEmbedding');
const { Test, sequelize } = require('./services/sequelize');

async function main() {
  try {
    const text = 'who ate broccoli?';
    const embedding = await createEmbedding(text);
    const content = await Test.findAll({
      order: [
        sequelize.literal(`embedding <-> '${JSON.stringify(embedding)}'`),
      ],
      raw: true,
    });
    console.log(content.map(({ id, content }) => ({ id, content })));
  } catch (error) {
    console.error('Unable to connect to the database:', error?.message);
  }
}

main();
