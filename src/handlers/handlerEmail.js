const { emailContacto, emailBuhos } = require("../controllers/controllerEmail");

const handlerEmail = (req, res) => {
    const {name, email, message} = req.body;
    try {
        emailContacto(name, email);
        emailBuhos(name, email, message);
        return res.status(200).json({message: "Email enviado" });
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = handlerEmail;