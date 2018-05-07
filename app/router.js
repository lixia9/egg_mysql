'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user/getalluser', controller.user.getAllUser);
  app.resources('users', '/api/users', app.controller.user);
};
