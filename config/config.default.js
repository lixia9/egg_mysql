'use strict';

// module.exports = appInfo => {
//   const config = exports = {};
//   config.mysql = {
//     // 单数据库信息配置
//     client: {
//       // host
//       host: 'localhost',
//       // 端口号
//       port: '3306',
//       // 用户名
//       user: 'root',
//       // 密码
//       password: 'Pass1234',
//       // 数据库名
//       database: 'test',
//     },
//     // 是否加载到 app 上，默认开启
//     app: true,
//     // 是否加载到 agent 上，默认关  闭
//     agent: false,
//   };
//   config.sequelize= {
//     dialect: 'mysql',
//     database: 'test',
//     host: 'localhost',
//     port: '3306',
//     username: 'root',
//     password: 'Pass1234',
//   };
//   config.graphql = {
//     router: '/graphql',
//     // 是否加载到 app 上，默认开启
//     app: true,
//     // 是否加载到 agent 上，默认关闭
//     agent: false,
//     // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
//     graphiql: true,
//     // graphQL 路由前的拦截器
//     onPreGraphQL: function* (ctx) {},
//     // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
//     onPreGraphiQL: function* (ctx) {},
//   };
//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1524212936705_6703';

//   // add your config here
//   config.middleware = [];

//   return config;
// };
module.exports = () => {
  const config = {
    sequelize: {
      dialect: 'mysql',
      database: 'test',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: 'Pass1234',
    },
    proxyworker: {
      port: 10086,
    },
    middleware: ['graphql'],
    security: {
      csrf: {
        ignore: () => true,
      },
    },
  };

  // should change to your own
  config.keys = 'egg-graphql';

  return config;
};
