
import { Request, Response } from "express-serve-static-core"
import { getProductsService, postProductService, deleteProductService, editProductService } from "../services/productsService"


export const getProductsController = async (req: Request, res: Response) => {
    try {
        const serviceResponse = await getProductsService();
        res.status(200).json({
            data: serviceResponse
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }

}

export const postProductController = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const newProduct = await postProductService(productData);
        res.status(201).json({
            data: newProduct,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteProductController = async (req: Request, res: Response) =>{
    try{
        const { id } = req.params;
        const deleted = await deleteProductService(Number(id));
        res.status(200).json({data: deleted})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error: "Internal server error" })
    }
}

export const editProductController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const productData = req.body;
        const updated = await editProductService(Number(id), productData);
        res.status(200).json({data: updated})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error: "Internal server error" })
    }
}