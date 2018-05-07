'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getAllUser() {
    const userList = await this.app.mysql.select('account');
    return userList;
  }

  async addUser(userInfo) {
    const result = await this.app.mysql.insert('account',userInfo);
    return result;
  }
}

module.exports = UserService;
