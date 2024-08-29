const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const connectDB = require("./config/db");


dotenv.config();


connectDB();


const app = express();


app.use(express.json());
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(morgan("dev"));


app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
const sendEmail = require("./utils/sendEmail");



const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});



app.post("/api/v1/contactus/sendemail", async (req, res) => {
  const { email} = req.body;

  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const emailSubject = "Thank You for Reaching Out to RedReserve";
    const emailMessage = `
        <h3>Hello,</h3>
        <p>Thank you for contacting RedReserve!</p>
        <p>We have received your message and our team is reviewing your request. We will get back to you as soon as possible with the information or assistance you need.</p>
        <p>If you have any additional questions or need immediate assistance, please do not hesitate to reply to this email.</p>
        <p>Best Regards,<br/>The RedReserve Team</p>
    `;
    console.log(email);
    await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/v1/payment/sendemail", async (req, res) => {
  const { email } = req.body;

  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const emailSubject = "Thank You for Your Interest in Volunteering with RedReserve";
    const emailMessage = `
        <h3>Hello,</h3>
        <p>Thank you for expressing your interest in volunteering with RedReserve!</p>
        <p>We truly appreciate your enthusiasm and willingness to support our blood donation drives. Our team is currently reviewing volunteer applications and will reach out to you with details about upcoming events and opportunities.</p>
        <p>In the meantime, if you have any questions or need further information, please feel free to reply to this email.</p>
        <p>Thank you once again for your commitment to making a difference.</p>
        <p>Best Regards,<br/>The RedReserve Team</p>
    `;
    console.log(email);
    await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
