const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const drivers = require("../models/drivers");
const mongoose = require('mongoose');

// Set up multer storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Upload files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    // Use current timestamp as filename to ensure uniqueness
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.route("/register").post(upload.single('image'), (req, res) => {
  const {
    firstName,
    lastName,
    address,
    phone,
    nic,
    lclass,
    lnumber,
    expiry,
    username,
    password
  } = req.body;

  // Get the file path of the uploaded image
  const imagePath = req.file ? req.file.path : '';

  const newDriver = new drivers({
    firstName,
    lastName,
    address,
    phone,
    nic,
    lclass,
    lnumber,
    expiry,
    username,
    password,
    imagePath // Save the path of the uploaded image in the database
  });

  newDriver.save()
    .then(() => {
      res.json("Driver added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error adding driver" });
    });
});

router.route("/drivers").get((req, res) => {
    drivers
      .find()
      .then((drivers) => {
        res.json({ success: true, existingDrivers: drivers }); // Return tables as part of an object with a success key
      })
      .catch((err) => {
        console.log(err);
      });
  });



router.route("/update/:id").put(async (req,res) =>{
    let id = req.params.id;
    const {firstName,lastName,address,phone,nic,lclass,lnumber,expiry,username,password,imagePath } = req.body;

    const updatedriver = {
       firstName ,
        lastName ,
        address ,
        phone ,
        nic ,
        lclass ,
        lnumber ,
        expiry ,
        username ,
        password ,
        imagePath
    }

    const update = await drivers.findByIdAndUpdate(id,updatedriver)
    .then(() =>{
        res.status(200).send ({status: "Driver details updated"})

    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

router.route("/delete/:id").delete(async (req , res) => {
    let id = req.params.id;

    await drivers.findByIdAndDelete(id)
     .then(() =>{
        res.status(200).send({status:" Driver detais deleted "});
     }).catch ((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete driver detais", error: err.message});
     })
})

router.route("/drivers/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ status: "Invalid driver id" });
    }
    const driver = await drivers.findById(id);
    if (!driver) {
      return res.status(404).send({ status: "Driver not found" });
    }
    res.status(200).send({ status: "Driver details fetched", driver });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ status: "Error fetching driver details", error: err.message });
  }
});





module.exports = router;
