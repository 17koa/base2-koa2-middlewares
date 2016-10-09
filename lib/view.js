var views = require('koa-views');

module.exports = function (app) {
  if (app.debug) {
    console.log(app.get('views'));
  }
  
  if (app.get('views')) {
    app.use(views('views', {
      root:     app.get('views'),
      default:  'jade'
    }));
  }
};
