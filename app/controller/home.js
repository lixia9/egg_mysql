'use strict';


const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {
    this.ctx.status = 200;
    this.ctx.body = await this.ctx.service.home.findAll();
  }
}

module.exports = HomeController;
