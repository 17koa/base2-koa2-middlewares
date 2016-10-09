// var bodyParser = require('body-parser');

var bodyParser = require('koa-bodyparser');

module.exports = function (app) {
  var post_enable = app.cfg.post_enable;
  
  if (post_enable == true) {
    if (app.debug) {
      console.log('[DEBUG]: post_enable = ' + post_enable);
    }
    
    app.use(
      bodyParser({
        detectJSON: function (ctx) {
          return /\.json$/i.test(ctx.path);
        },
        onerror: function (err, ctx) {
          ctx.throw('body parse error', 422);
        }
      })
    );
  }
};
