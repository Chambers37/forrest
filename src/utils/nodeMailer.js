import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test-user',
    pass: 'test-pass',
  },
});

transporter.sendMail({
  to: 'matthew@forresthardscape.com',
  subject: 'New email from quotes test',
  text: 'this is the text message part, did it work?',
},
(error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response)
  }
}
);

