"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var nodemailer = require("nodemailer"); // async..await is not allowed in global scope, must use a wrapper


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var testAccount, transporter, info;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return nodemailer.createTestAccount();

          case 2:
            testAccount = _context.sent;
            // create reusable transporter object using the default SMTP transport
            transporter = nodemailer.createTransport({
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
            }); // send mail with defined transport object

            _context.next = 6;
            return transporter.sendMail({
              from: '"Fred Foo 👻" <asterixinfintum@protonmail.com>',
              // sender address
              to: "marcuscardosso@protonmail.com",
              // list of receivers
              subject: "Hello ✔",
              // Subject line
              text: "Hello world?",
              // plain text body
              html: "<b>Hello world?</b>" // html body

            });

          case 6:
            info = _context.sent;
            console.log("Message sent: %s", info.messageId); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview only available when sending through an Ethereal account

            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main()["catch"](console.error);