require("dotenv").config();
import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import cors from 'cors';

import mongoose from 'mongoose';

import routes from './routes';

const app = express();

/*const whitelist = ['http://cxefinance.com', 'http://www.cxefinance.com', 'http://localhost:3000']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}*/

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});*/

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

const { auth, email, admin, user, contact } = routes;
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('hello world api from cxe')
});

app.use(auth);
app.use(email);
app.use(admin);
app.use(user);
app.use(contact);

mongoose.connect('mongodb://db:27017/cxedb', {
  //mongodb://db:27017/cxedb =====> production
  //mongodb://127.0.0.1:27017/cxedb ===> development

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected to database');

    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here ${PORT}`);
    });
});
