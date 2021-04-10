'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Favorite.hasMany(models.Book)
      models.Favorite.belongsToMany(models.User, {through: "user_id"})
    }
  };
  Favorite.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    book_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};