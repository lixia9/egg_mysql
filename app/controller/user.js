'use strict';


const Controller = require('egg').Controller;


class HomeController extends Controller {
  async getAllUser() {
    this.ctx.status = 200;
    this.ctx.body = await this.ctx.service.user.getAllUser();
  }
}

module.exports = HomeController;
