const router = require("express").Router()
const nodemailer = require("nodemailer")



router.post('/send', (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secufre: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: 'New Message from ' + name,
      text: message,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send('Something went wrong.');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Success!');
      }
    });
  });

  

  module.exports = router;