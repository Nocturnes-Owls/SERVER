const {Router} = require('express');
const routes = Router();
const handlerEmail = require('../handlers/handlerEmail.js');

routes.post ('/sendEmail', handlerEmail);

module.exports = routes;