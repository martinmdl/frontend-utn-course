/* const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

router.get('/', function (req, res) {
    res.render('personalizacion.ejs')
})

router.post('/', function (req, res) {

    let nombreForm, emailForm, mensajeForm
    nombreForm = req.body.nombre
    emailForm = req.body.email
    mensajeForm = req.body.mensaje

    function validacion() {

        if ( nombreForm == "" || emailForm == "" || mensajeForm == "" ) {
            let validacion = "Faltan datos por completar"
            res.render('personalizacion.ejs',{
                validacion,
                nombreForm,
                emailForm,
                mensajeForm
            })

        } else {
            async function main() {

                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.USER,
                        pass: process.env.PASS,
                    },
                  });
                  
                  let info = await transporter.sendMail({
                    from: `${nombreForm} <${emailForm}>`,
                    to: "guido.varela@gmail.com",
                    subject: "Nuevo contacto",
                    html: `Nombre: ${nombreForm} <br> Email: ${emailForm} <br> Localidad ${mensajeForm} `,
                  });                  
                  
                try {
                    const enviar = await envioForm.create({
                        id:'',
                        nombre: nombreForm,
                        email:emailForm,
                        mensaje:mensajeForm
                    })
                    console.log(enviar)
                    console.log("Dato enviado")

                } catch (error) {
                    console.log(error + "/ Enviando desde el Form Contacto")
                }

                res.render('email.ejs',{
                    nombreForm,
                    emailForm,
                    mensajeForm,
                    envio:true
                })

            }
            main().catch(console.error);

    }
        }
    validacion()  
}) 



let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    }
});

let mailOptions = {
    from: '"Astral Print" <tinchomdl00@gmail.com>',
    to: 'guido.varela@gmail.com',
    subject: 'NodeMailer',
    text: 'Funcionando'
}


transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('NodeMailer funcionando');
    }
});

module.exports = router;
*/