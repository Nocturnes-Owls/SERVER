const express = require('express');
const server = express();
const cors = require("cors");
const routers = require('./routes/routes')

server.use(cors());
server.use(express.json());


server.use('/', routers);

module.exports = server;