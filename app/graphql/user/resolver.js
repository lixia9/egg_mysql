'use strict';

module.exports = {
  Query: {
    user(root, {}, ctx) {
      return ctx.connector.user.fetch();
    },
    
  },
};
