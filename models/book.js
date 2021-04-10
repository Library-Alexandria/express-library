'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.book.belongsToMany(models.user, {through: "user_id"})
    }
  };
  book.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    subjects: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};