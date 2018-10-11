const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
var portDefault = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);
server.listen(portDefault, () => {
  console.log("JSON Server is running");
});
