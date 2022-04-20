const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "user@gmail.com",
    pass: "pass_email",
  },
});

let message = {
  from: "chienvu1911@email.com",
  to: "dangbichdiep18@gmail.com",
  subject: "Hi em iu",
  html: "<h1>Hello SMTP Email</h1>",
};

transporter.sendMail(message, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
