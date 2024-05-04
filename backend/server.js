const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");



const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");


// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(bodyParser.json());
app.use('/images', express.static('images'));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// mongodb connection
const con = require("./database/connection.js");

//User Routers
const userRoutes = require("./routes/Users.js");
app.use("/api/users",userRoutes);
const authRoutes = require("./routes/auth.js");
app.use("/api/auth",authRoutes);
const locationRoutes = require('./routes/locationRoutes.js');
app.use('/api', locationRoutes);
const collectingdetailRoutes = require("./routes/collectingdetailRoute.js");
app.use("/Api/Addcollectingdata", collectingdetailRoutes);
const fillingdetailRoutes = require("./routes/fillingdetailRoute.js");
app.use("/Api/Fillingdetails", fillingdetailRoutes);

const getallfillingdetailsRoutes = require("./routes/getallfillingdetailsRoute.js");
app.use("/Api/GetallfillingdetailsRoutes", getallfillingdetailsRoutes);

const driverRouter = require("./routes/driversRoute.js");
app.use("/drivers",driverRouter);

// const feedbackroute = require("./routes/feedbackroute.js");
// app.use("/Api/Feedback",feedbackroute);

// const employeeRouter = require("./Routes/employees");
// app.use("/employees", employeeRouter);







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


