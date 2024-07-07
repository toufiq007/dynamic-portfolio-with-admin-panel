import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { connectionDB } from "./database/dbConfig";
import { errorMiddleware } from "./middlewares/errorMiddleware";
dotenv.config();
connectionDB();

const app = express();

// all middlewares
app.use(
  cors({
    origin: [
      process.env.PORTFOLIO_URL as string,
      process.env.DASHBOARD_URL as string,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for file upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp",
  })
);

// error middlwares
app.use(errorMiddleware);

export default app;
