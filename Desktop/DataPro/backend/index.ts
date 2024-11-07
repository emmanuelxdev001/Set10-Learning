import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";
import cors from "cors";
import env from "dotenv";
env.config();

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

mainApp(app);
const server = app.listen(process.env.PORT, () => {
  console.clear();
  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
