import cors from "cors";
import express, { Request, Response } from "express";
import router from "./app/routes/routes";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
