const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/send", async (req, res) => {
  const { email, message, name } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c0e5f520d062e6",
      pass: "f0dec7d212eba6",
    },
  });

  const mailOptions = {
    from: "porfolio@fabricio.pt",
    to: "fabricio.sousa@fabricio.pt",
    subject: `Portfolio Contact: ${name}`,
    text: `${message}
Email: ${email}`,
    html: `<p>${message}</p> <br/><p>Email: ${email}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Success!");
    }
  });
});

module.exports = router;
