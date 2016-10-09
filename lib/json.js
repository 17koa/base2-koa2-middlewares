json = require('koa-json')

module.exports = function (app) {
  app.use(json());
};
