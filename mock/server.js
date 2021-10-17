const express = require ('express');
const mealsJson = require ('./meals.json');
// const mysql = require ('mysql');
const AWS = require ('aws-sdk');

AWS.config.update ({
  region: 'us-east-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient ();

// const conn = mysql.createConnection ({
//   host: 'localhost',
//   user: 'suchiuser',
//   password: 'suchi@1234',
//   port: 3306,
// });

// conn.connect (function (err) {
//   if (err) throw err;
//   console.log ('Connected!');
// });

// const mongoose = require ('mongoose');
// const mealsModel = require ('./mealsModel');

// mongoose.connect ('mongodb://localhost:27017/usersdb', {
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on ('error', console.error.bind (console, 'connection error: '));
// db.once ('open', function () {
//   console.log ('Mongo connection open');
// });

const app = express ();

// app.get ('/api/meals', async (req, res) => {
//   const meals = await mealsModel.find ({});
//   try {
//     res.send (meals[0]);
//   } catch (error) {
//     res.status (500).send (error);
//   }
// });

app.get ('/api/meals', async (req, res) => { 
  res.send (mealsJson);
});

app.post ('/api/meals', function (req, res) {
  setTimeout (() => {
    res.send ('sucessfully sent data');
  }, 1000);
});

app.get ('/api/employees', function (req, res) {
  setTimeout (() => {
    conn.query ('select * from suchi_db.emp', function (error, result) {
      if (error) res.error (error);
      res.send (result);
    });
  }, 1000);
});

app.get ('/api/employee/:id', function (req, res) {
  setTimeout (() => {
    conn.query (
      'select * from suchi_db.emp where id = ?',
      req.params.id,
      function (error, result) {
        if (error) res.error (error);
        res.send (result);
      }
    );
  }, 1000);
});

app.get ('/api/employee/dept/:id', function (req, res) {
  setTimeout (() => {
    conn.query (
      'select * from suchi_db.emp where deptid = ?',
      req.params.id,
      function (error, result) {
        if (error) res.error (error);
        res.send (result);
      }
    );
  }, 1000);
});

app.listen (4000, function (req, res) {
  console.log ('App Running in port 4000');
});
