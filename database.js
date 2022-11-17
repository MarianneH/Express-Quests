require("dotenv").config(); //import dotenv configs
const mysql = require("mysql2/promise"); //use mysql2

//import from dotenv file
const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//check for connection
// database
//   .getConnection()
//   .then(() => {
//     console.log("Can reach database");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// show all db results
// database
//   .query("select * from movies")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//show the movies
// database
//   .query("select * from movies")
//   .then((result) => {
//     const movies = result[0];
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//same but with array destructuring
// database
//   .query("select * from movies")
//   .then(([movies]) => {
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = database; //export database
