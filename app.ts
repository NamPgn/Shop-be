import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routerProduct from "./src/router/product";
import routerSize from "./src/router/size";
import routerColor from "./src/router/color";
import routerProductChild from "./src/router/productChild";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app: Express = express();
app.use(cors());
const port = process.env.PORT;
const routers = [routerProduct, routerSize, routerColor, routerProductChild];
app.use(express.json());
routers.map((router) => app.use("/api", router));
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

try {
  mongoose.connect("mongodb://127.0.0.1:27017/MyShop");
  console.log("Sucsses");
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
