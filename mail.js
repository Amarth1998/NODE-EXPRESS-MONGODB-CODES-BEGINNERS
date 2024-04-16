var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amarthpatel.ap@gmail.com',
    pass: 'fttf hrat zcax wgia'
  }
});

var mailOptions = {
  from:'amarthpatel.ap@gmail.com' ,
  to: "shreyasaxena180@gmail.com",
  subject: 'Sale maan ja ',
  html:"<h1>khikhi</h1>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



// User
// Application-specific password required
// ChatGPT
// If you're encountering the error "535-5.7.8 Username and Password not accepted" and your email service provider requires application-specific passwords for SMTP authentication, you'll need to generate and use an application-specific password for your application instead of your regular email account password.

// Here's how you can generate an application-specific password (assuming you're using Gmail as your email provider):

// Go to your Google Account settings: Visit https://myaccount.google.com and sign in to your Google account.

// Navigate to Security settings: Click on "Security" in the left-hand menu.

// Generate an App Password: Look for the "Signing in to Google" section, and then click on "App passwords" (you may need to verify your identity again).

// Select App: Choose "Mail" as the app and "Other (Custom name)" as the device.

// Generate: Click on "Generate" to create the app-specific password. Google will generate a unique 16-character password for you.

// Use the App Password: Use the generated app-specific password instead of your regular password in your application's SMTP configuration.

// Remember that application-specific passwords are specific to the application and the device you're using it on. If you're using multiple applications or devices that require SMTP authentication, you may need to generate separate app passwords for each one.

// Once you've generated and used the app-specific password in your application's SMTP configuration, you should be able to authenticate successfully with your email service provider.