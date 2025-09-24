// api/server.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("api/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// برای استفاده در Vercel باید از این مدل تابع استفاده کنید
module.exports = (req, res) => {
  server(req, res);
};
