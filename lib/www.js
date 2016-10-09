module.exports = function (app) {
  if (app.get('public')) {
    // app.use(express.static(app.get('public')));
    app.use(require('koa-static')(app.get('public')));
  }
}
