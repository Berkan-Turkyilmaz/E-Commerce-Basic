import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/controllers.js";

const router = express.Router();

router.post("", createProduct)

router.delete("/:id", deleteProduct)

router.get("", getProducts)

router.get("/:id", getProduct)


router.put("/:id", updateProduct)

export default router;