import { Request, Response } from "express";
import { getTopProducts } from "../services/statsService";

export const fetchTopProducts = async (_req: Request, res: Response) => {
    try {
        const data = await getTopProducts();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching top products", error });
    }
};
