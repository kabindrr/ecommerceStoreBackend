//Email WorkFLow

//have nodemailer installed

//create transporter

//form the body message

//sendMail

import nodemailer from "nodemailer";

const emailProcessor = async (mailBodyObj) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTO_PASSWORD,
      },
    });

    const info = await transporter.sendMail(methodBodyObj);
    return info;
  } catch (error) {}
};

// async..await is not allowed in global scope, must use a wrapper
export const emailVerificationMail = ({ email, fName, url }) => {
  // send mail with defined transport object
  const obj = {
    from: `"Ecommerce Store 👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Action Required Hello ✔", // Subject line
    text: `Hello there please follow the link to verify your account ${url}`, // plain text body
    html: `Hello ${fName}`,
    // html body
  };

  <a href="" style="padding:2rem; background:green">
    Verify Now
  </a>;

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

main().catch(console.error);

<p>
  `If the button doesnt work above, please copy the following url and paste in
  your browser ${url}`
</p>;
