'use strict';

const DataLoader = require('dataloader');

class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
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

