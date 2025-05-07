import express, { Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + "/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage }).single("file");
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.post("/upload/file", upload, (req: Request, res: Response) => {
  res.status(200).json({ message: "File Uploaded" });
});

app.get("/upload/file", (req, res: Response) => {
  res.status(200).send("WOrjing");
});

app.listen(8000, () => {
  console.log("listening...");
});
