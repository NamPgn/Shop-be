import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
} from "../controller/products";

const routerProduct = express.Router();

routerProduct.get("/products", getAllProducts);
routerProduct.post("/product/add", addProduct);
routerProduct.delete("/product/delete/:id", deleteProduct);

export default routerProduct;
