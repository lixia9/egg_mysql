'use strict';

module.exports = {
  Query: {
    getUserById(root, {id}, ctx) {
      return ctx.connector.user.fetchById(id);
    },
    getUserByIds(root, {ids}, ctx) {
      return ctx.connector.user.fetchByIds(ids);
    },
    
    getAllUser(root, {}, ctx) {
      return ctx.connector.user.fetchAll();
    },
  },
};
