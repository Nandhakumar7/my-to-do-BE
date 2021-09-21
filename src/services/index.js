const users = require('./users/users.service.js');
const category = require('./category/category.service.js');
const tasks = require('./tasks/tasks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(category);
  app.configure(tasks);
};
