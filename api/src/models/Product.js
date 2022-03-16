const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Product', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image_url: {
        type: DataTypes.TEXT,
      },
      price : {
        type: DataTypes.INTEGER,
      },
    },{
    timestamps:false,
  })
}