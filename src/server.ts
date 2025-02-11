// src/server.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./components/mailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Optional: Restrict CORS to a specific origin using an environment variable.
// If CLIENT_URL is not set, allow all origins.
const corsOptions = {
  origin: process.env.CLIENT_URL || "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/sendemail", async (req: Request, res: Response) => {
  const { recipientName, interviewDate, interviewTime, recEmail } = req.body;
  try {
    const templateParams = {
      recipientName,
      interviewDate,
      interviewTime,
      footerText: "For further inquiries, please contact our HR department."
    };
    const info = await sendEmail(recEmail, "Interview Scheduled!", templateParams);
    res.status(200).json({ message: "Email sent", messageId: info.messageId });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
