var path = require('path');
var favicon = require('koa-favicon');

module.exports = function (app) {
  if (app.cfg['public'] && app.cfg['favicon_enable'] && app.cfg['favicon']) {
    var p = path.join(app.get('public'), app.cfg['favicon']);
    
    if (app.debug) {
      console.log('[DEBUG]: favicon = ' + p);
    }
    
    // uncomment after placing your favicon in /public
    app.use(favicon(p));
  }
};
