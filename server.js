const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware for handling form data and file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Upload files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename files with a timestamp
  },
});
const upload = multer({ storage });

app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', upload.single('file'), (req, res) => {
  // Access form data
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  // Access the uploaded file (if any)
  const uploadedFile = req.file;

  // Verify CAPTCHA (replace 'YOUR_SECRET_KEY' with your actual secret key)
  const secretKey = 'YOUR_SECRET_KEY'; // Replace with your reCAPTCHA secret key
  const userResponse = req.body['g-recaptcha-response'];

  // You can use a library like 'axios' to make a POST request to reCAPTCHA API
  // and verify the user's response.
  // Example using axios:
  // axios.post('https://www.google.com/recaptcha/api/siteverify', {
  //   secret: secretKey,
  //   response: userResponse,
  // })
  // .then((response) => {
  //   const { success } = response.data;
  //   if (success) {
  //     // CAPTCHA verification successful, proceed with saving form data or other actions
  //     // ...
  //   } else {
  //     // CAPTCHA verification failed
  //     res.status(400).send('CAPTCHA verification failed');
  //   }
  // })
  // .catch((error) => {
  //   console.error(error);
  //   res.status(500).send('Internal Server Error');
  // });

  // Handle the form data and uploaded file as needed (e.g., send an email, save to a database, etc.)
  // ...

  // Send a response to the client
  res.send('Form submitted successfully!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
