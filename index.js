import express from 'express';
import nodemailer from 'nodemailer';


const app = express();

app.get('/', (req, res) => {



  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'services.propad@gmail.com',
      pass: 'lmiqsegofxgsjbnl'
    }
  });  

  const email = req.query.owneremail;
  const name = req.query.name;
  const uemail = req.query.email;
  const usubject = req.query.subject;
  const umsg = req.query.body;
  const url = req.query.url;


  const mailOptions = {
    from: 'services.propad@gmail.com',
    to: email,
    subject: `${name } Contacted from Portfolio`,
    text: `Contact Form Details \n\nName : ${name}\nEmail : ${uemail}\nSubject : ${usubject}\nBody : ${umsg}`
  };

  // res.send(`OwnerEmail : ${email}\nName: ${name}\nemail: ${uemail}\nsubject : ${usubject}\numsg : ${umsg}\nUrl : ${url}`);


  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      
    }
  });

  res.redirect(url);

});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
