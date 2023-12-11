const { Sequelize, DataTypes } = require('sequelize');
const pgvector = require('pgvector/sequelize');
const { config } = require('dotenv');
config();

pgvector.registerType(Sequelize);

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
});

const Test = sequelize.define(
  'Test',
  {
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
  },
  {
    // Other model options go here
    tableName: 'test',
    underscored: true,
    timestamps: false,
  },
);

module.exports = { sequelize, Test };
