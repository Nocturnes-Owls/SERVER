const transporter = require('../../config/nodemailer');
require("dotenv").config();
const { NODEMAILER_EMAIL} = process.env;

const emailContacto = async(name, email) => {
    await transporter.sendMail({
        from: NODEMAILER_EMAIL,
        to: email,
        subject: 'Búhos Nocturnos',
        html: `
        <div style="background: radial-gradient(circle, #e4d175 5%, #cfa743 95%); padding: 2rem 0; text-align: center;">
            <div style="background: #FFFFFF; width: 70%; max-width: 350px; margin: 0 auto; padding: 3rem 2rem; border-radius: 10px;">
                <div style="padding-bottom: 1rem; font-size:1rem">
                    Hola, 
                    <p style="font-size: 1.5rem;margin:0.5rem 0 1rem;font-weight: 700;color: #d6a354;"> ${name}</p>
                </div>
                <hr style="margin: 0; border-top: 0; border-bottom: 1px solid #ebebeb;">
                <div style="padding: 1rem 2rem 0;">
                    <p style="font-size: 0.9rem">Hemos recibido tu mensaje.</p>
                    <p style="font-size: 0.9rem">En la brevedad nos pondremos en contacto contigo.</p>
                    <a href="https://www.nocturneowls.com"
                        style="
                        padding: 0.8rem;
                        background: #1f1f1f;
                        text-decoration: none;
                        color: #fff;
                        border-radius: 0.2rem;
                        margin-top: 1rem;
                        display: inline-block;" 
                    >Búhos Nocturnos</a>
                </div>
            </div>
        </div>
        `,
    })
}

const emailBuhos = async(name, email, message) => {
    await transporter.sendMail({
        from: email,
        to: NODEMAILER_EMAIL,
        subject: 'Contacto desde website',
        html: `
        <div style="background: radial-gradient(circle, #e4d175 5%, #cfa743 95%); padding: 2rem 0; text-align: center;">
            <div style="background: #FFFFFF; width: 70%; max-width: 350px; margin: 0 auto; padding: 3rem 2rem; border-radius: 10px;">
                <div style="padding-bottom: 1rem; font-size:1rem">
                    Hola, soy 
                    <p style="font-size: 1.5rem;margin:0.5rem 0 1rem;font-weight: 700;color: #d6a354;"> ${name}</p>
                </div>
                <hr style="margin: 0; border-top: 0; border-bottom: 1px solid #ebebeb;">
                <div style="padding: 1rem 2rem 0;">
                    <p style="font-size: 0.9rem">${message}</p>
                    <p style="font-size: 0.9rem">Correo: ${email}</p>
                </div>
            </div>
        </div>
        `,
    })
}

module.exports = {
    emailContacto,
    emailBuhos
};