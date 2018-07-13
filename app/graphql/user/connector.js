'use strict';

const DataLoader = require('dataloader');

class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  create(User){
    return this.ctx.app.model.User.create(User);
  }
  updateUser(User){
     this.ctx.app.model.User.update(User,{where:{id:User.id}});
     return User
  }
  deleteUser(id){
    return  this.ctx.app.model.User.destroy({where:id});
  }
  fetch(ids) {
    const users = this.ctx.app.model.User.findAll({
      where: {
        id: {
          $in: ids,
        },
      },
    });
    return users;
  }

  fetchByIds(ids) {
    console.log(ids)
    return this.loader.loadMany(ids);
  }
  fetchAll() {
    return this.ctx.app.model.User.findAll();
  }

  fetchById(id) {

    return this.loader.load(id);
  }
}

module.exports = UserConnector;

