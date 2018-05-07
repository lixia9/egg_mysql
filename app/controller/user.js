'use strict';


const Controller = require('egg').Controller;


class HomeController extends Controller {
  async getAllUser() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = await ctx.model.User.findAll();
  }
}

module.exports = HomeController;
