import { Router, Request, Response } from "express";
import { getSalesController, getSalesByUserIdController, postSaleController, cancelSaleController } from "../controllers/salesControllers"

import SaleDto from "../dto/SaleDto"

const salesRouter: Router = Router();

salesRouter.get("/", (req: Request, res: Response) => getSalesController(req, res));

salesRouter.get("/:id", (req: Request<{id: string}>, res: Response) => getSalesByUserIdController(req, res))

salesRouter.post("/sale", (req: Request<unknown, unknown, SaleDto>, res: Response) => postSaleController(req, res));

salesRouter.put("/cancel/:id", (req: Request<{id: string}>, res: Response) => cancelSaleController(req, res))

export default salesRouter;