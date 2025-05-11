import { Router } from "express";
import { fetchTopProducts } from "../controllers/statsController";

const router = Router();

router.get("/top-products", fetchTopProducts);

export default router;
