import express from "express";
import { addSize, deleteSize, getAllSize } from "../controller/size";

const routerSize = express.Router();

routerSize.get("/sizes", getAllSize);
routerSize.post("/size/add", addSize);
routerSize.delete("/size/delete/:id", deleteSize);

export default routerSize;
