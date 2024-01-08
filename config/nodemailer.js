const nodemailer = require("nodemailer");
require("dotenv").config();
const { NODEMAILER_EMAIL, NODEMAILER_PASS} = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASS,
  },
});

transporter.verify()
  .then(() => console.log("Transporte creado con exito..."))
  .catch((error) => console.error(error));

module.exports = transporter;