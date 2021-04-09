'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.books.belongsToMany(models.favorites, {through: "book_id"})
    }
  };
  Book.init({
    book_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    subject: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};