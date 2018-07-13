module.exports = (app) => {
  const { STRING } = app.Sequelize;
 
  
  const User = app.model.define('account', {
    "userName": STRING(30),
    "password": STRING(30),
    "nickName": STRING(30),
    "email": STRING(30),
    "phoneNumber": STRING(30)
  },{
    freezeTableName: true,
    timestamps: false
  });

  return User;
};
