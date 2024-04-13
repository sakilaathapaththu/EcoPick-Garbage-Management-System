// const router = require("express").Router();
// const { User, validate } = require("../models/User");
// const bcrypt = require("bcryptjs");
// const nodemailer = require("nodemailer");

// // Function to send email
// async function sendEmail(userEmail) {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASSWORD
//             }
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: userEmail,
//             subject: 'Account Created Successfully',
//             text: 'Dear User,\n\nYour account has been created successfully.\n\nThanks!'
//         };

//         await transporter.sendMail(mailOptions);
//         console.log("Email sent successfully.");
//     } catch (error) {
//         console.error("Error sending email:", error);
//     }
// }

// router.post("/", async (req, res) => {
//     try {
//         const { error } = validate(req.body);
//         if (error)
//             return res.status(400).send({ message: error.details[0].message });

//         const user = await User.findOne({ email: req.body.email });
//         if (user)
//             return res.status(409).send({ message: "User with given email already exists" });
        
//         const salt = await bcrypt.genSalt(Number(process.env.SALT));
//         const hashPassword = await bcrypt.hash(req.body.password, salt);
         
//         await new User({ ...req.body, password: hashPassword }).save();
        
//         // Send email notification to user
//         await sendEmail(req.body.email);

//         res.status(201).send({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// });
// router.get("/count", async (req, res) => {
//     try {
//         const count = await User.countDocuments();
//         res.status(200).json({ count });
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// });


// module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User, validate } = require("../models/User");
const nodemailer = require("nodemailer");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config({ path: "../config.env" });

// Multer setup for profile image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save uploaded images to the "uploads" folder
  },
  filename: function (req, file, cb) {
    // Set the file extension to .jpg
    cb(null, Date.now() + ".jpg"); // Rename the file with a unique name and .jpg extension
  },
});

const upload = multer({ 
  storage,
  fileFilter: function (req, file, cb) {
    // Check if the file is an image
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
});

// Function to send email
async function sendEmail(userEmail) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Account Created Successfully",
      text: "Dear User,\n\nYour account has been created successfully.\n\nThanks!",
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Register a new user
router.post("/", upload.single("profileImage"), async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(409).send({ message: "User with given email already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Save profile image
    let profileImage = null;
    if (req.file) {
      profileImage = req.file.path;
    }

    user = new User({
      ...req.body,
      password: hashPassword,
      profileImage,
    });
    await user.save();

    // Send email notification to user
    await sendEmail(req.body.email);

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Optionally, provide an endpoint to get the count of registered users
router.get("/count", async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
