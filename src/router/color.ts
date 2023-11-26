import express from "express";
import { addColor, deleteColor, getAllColor } from "../controller/color";

const routerColor = express.Router();

routerColor.get("/colors", getAllColor);
routerColor.post("/color/add", addColor);
routerColor.delete("/color/delete/:id", deleteColor);

export default routerColor;
