"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
        "host": "127.0.0.1",
        "port": 1025,
        "secure": false,
        "logger": true,
        "debug": true,
        "ignoreTLS": true,
        "auth": {
            "user": "asterixinfintum@protonmail.com",
            "pass": "$4quqv5ENvKtvxx"
        },
        "tls": {
            "rejectUnauthorized": false
        }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <asterixinfintum@protonmail.com>', // sender address
    to: "marcuscardosso@protonmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);