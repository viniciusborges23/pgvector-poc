const { DataTypes } = require('sequelize');
const { createEmbedding } = require('./createEmbedding');
const { Test, sequelize } = require('./services/sequelize');

const texts = [
  'I like to eat broccoli and bananas.',
  'I ate a banana and spinach smoothie for breakfast.',
  'Chinchillas and kittens are cute.',
  'My sister adopted a kitten yesterday.',
  'Look at this cute hamster munching on a piece of broccoli.',
];

async function main() {
  try {
    await sequelize.query('CREATE EXTENSION IF NOT EXISTS vector');
    const queryInterface = sequelize.getQueryInterface();
    queryInterface.createTable('test', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      embedding: {
        type: DataTypes.VECTOR(1536),
        allowNull: false,
      },
    });

    for (const text of texts) {
      console.log('\n>>', text);
      const embedding = await createEmbedding(text);
      await Test.create({
        content: text,
        embedding,
      });
    }
  } catch (error) {
    console.log(error?.message);
  }
}

main();
