const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL,
            subject: "Yangi murojaat (Yonsei Consulting)",
            text: `
Ism: ${name}
Email: ${email}
Telefon: ${phone}

Xabar:
${message}
            `
        });

        res.json({ success: true, message: "Xabar yuborildi" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Xatolik yuz berdi" });
    }
});

app.listen(5000, () => {
    console.log("Server ishlayapti: http://localhost:5000");
});
