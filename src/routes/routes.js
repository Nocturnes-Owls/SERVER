const {Router} = require('express');
const routes = Router();

routes.post ('/sendEmail', (req, res) => {
    res.status(200).json({message: "Email enviado" });
});

module.exports = routes;