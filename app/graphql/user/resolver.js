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
  Mutation:{

    createUser(root, User, ctx) {
      return ctx.connector.user.create(User);
    },
    updateUser(root, User, ctx) {
      return ctx.connector.user.updateUser(User);
    },
    deleteUser(root, id, ctx) {
      return ctx.connector.user.deleteUser(id);
    },
  }
};
