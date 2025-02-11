import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./components/mailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins: string[] = [
    "https://bluphlux-ui.vercel.app",
    "http://localhost:5173"
];

app.use(cors({
    origin: (origin, callback) => {
        console.log("Request Origin:", origin);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

app.post("/sendemail", async (req: Request, res: Response) => {
    console.log("Request Received:");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

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
