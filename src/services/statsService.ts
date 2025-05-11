import { getTopSellingProducts } from "../repositories/ProductsRepository";

export const getTopProducts = async () => {
    return await getTopSellingProducts();
};
