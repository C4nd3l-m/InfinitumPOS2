import { Router, Request, Response } from "express";
import {getProductsController, postProductController, deleteProductController, editProductController} from "../controllers/productsControllers"

const productsRouter: Router = Router();

productsRouter.get("/", (req: Request, res: Response) => getProductsController(req, res))
productsRouter.post("/", (req: Request, res: Response) => postProductController(req, res))
productsRouter.delete("/:id", (req: Request, res: Response) => deleteProductController(req, res))
productsRouter.put("/:id", (req: Request, res: Response) => editProductController(req, res))

export default productsRouter