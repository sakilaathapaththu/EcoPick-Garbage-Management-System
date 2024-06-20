// const express = require("express");
// const router = express.Router();
// const { PythonShell } = require('python-shell');

// // Route to get feedback data
// router.get('/feedback', (req, res) => {
//   // Configure PythonShell to execute app.py
//   const options = {
//     scriptPath: '../../Sentiment', // Path to the directory containing app.py
//   };

//   PythonShell.run('app.py', options, (err, results) => {
//     if (err) {
//       console.error('Error executing Python script:', err);
//       res.status(500).json({ message: 'Internal server error' });
//     } else {
//       // Assuming app.py returns feedback data in JSON format
//       const feedbackData = JSON.parse(results);
//       res.json(feedbackData);
//     }
//   });
// });

// module.exports = router;
