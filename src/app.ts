import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { Server } from "http";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

import config from "./config";
import { globalErrorHandler } from "./modules/middlewares/gloabalErrorHandler";
import router from "./routes";

const app: Application = express();

// parser

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// application routerJ
// all route
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Hello there, welcome!" });
});
app.use(globalErrorHandler);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    StatusCode: StatusCodes.NOT_FOUND,
    message: "Route not found",
  });
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_uri as string);
    server = app.listen(config.port, () => {
      console.log(`server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

process.on("unhandledRejection", () => {
  console.log("unhandledRejection is detected, shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on("uncaughtException", () => {
  console.log("uncaughtException is detected, shutting down...");
  process.exit(1);
});
