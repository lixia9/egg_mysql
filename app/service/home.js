'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async findAll() {
    const user = await this.app.mysql.select('test');
    return user;
  }
}

module.exports = UserService;
