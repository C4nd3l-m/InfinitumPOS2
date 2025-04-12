import { Request, Response } from "express";
import { createSaleService } from "../services/salesService"
import { getSalesService, getSaleByIdService, cancelSaleService } from "../services/salesService";
import SaleDto from "../dto/SaleDto"
import { error } from "console";
import { Sale } from "../entities/Sale.entity";

export const getSalesController = async (req: Request, res: Response) => {
    try {
        const serviceResponse = await getSalesService()
        res.status(200).json({
            data: serviceResponse
        });
    } catch {
        res.status(404).json({ error: "Error" + error })
    }
};

export const getSalesByUserIdController = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const serviceResponse = await getSaleByIdService(parseInt(id, 10))
        res.status(200).json({
            data: serviceResponse
        })
    } catch (error) {
        console.error("Error in getSalesByUserIdController", error)
        res.status(404).json({
            error: "Error al obtener la venta"
        })
    }
};

export const postSaleController = async (req: Request<unknown, unknown, SaleDto>, res: Response) => {
    try {
        const serviceResponse: Sale = await createSaleService(req.body);
        res.status(201).json({
            data: serviceResponse
        })
    } catch (error) {
        console.error("error in sale" + error)
        res.status(400).json({ error })
    }
}

export const cancelSaleController = async (req: Request<{id: string}>, res: Response): Promise<void> => {
    const { id } = req.params;

    try{
        const serviceResponse = await cancelSaleService(parseInt(id, 10));
        res.status(200).json({
            data: serviceResponse
        })
    }catch(error){
        console.error(error);
        res.status(404).json({
            error: "Id not found"
        })
    }
}
