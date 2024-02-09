const express = require("express");
const cors = require("cors");
const morgan = require("morgan");




const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// mongodb connection
const con = require("./database/connection.js");



con
  .then((db) => {
    if (!db) return process.exit(1);

    // listen to the http server
    const server = app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    });

    app.on("error", (err) =>
      console.log(`Failed To Connect with HTTP Server : ${err}`)
    );
    // error in mondb connection

   
  })
  .catch((error) => {
    console.log(`Connection Failed...! ${error}`);
  });


