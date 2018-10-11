const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
//load dos bancos
var busca = require("./db.busca.json");
var usuario = require("./db.usuario.json");
//tentando usar in memory
var dbInMemory = {
  busca: busca,
  usuario: usuario
};
const router = jsonServer.router(dbInMemory);

var portDefault = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);
server.listen(portDefault, () => {
  console.log("JSON Server is running");
});
