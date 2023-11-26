import express from "express";
import { addProductChill, getProductChild } from "../controller/productChild";

const routerProductChild = express.Router();

routerProductChild.get("/productChild", getProductChild);
routerProductChild.post("/productChild/add/:id", addProductChill);

export default routerProductChild;
