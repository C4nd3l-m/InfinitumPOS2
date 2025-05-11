
import { AppDataSource } from "../config/data-source";
import { SaleDetail } from "../entities/SaleDetail.entity";

export const getTopSellingProducts = async (limit = 10) => {
    const saleRepo = AppDataSource.getRepository(SaleDetail);

    return await saleRepo
        .createQueryBuilder("sale_detail")
        .leftJoin("sale_detail.product", "product")
        .select("product.name", "name")
        .addSelect("SUM(sale_detail.quantity)", "totalSold")
        .groupBy("product.name")
        .orderBy("totalSold", "DESC")
        .limit(limit)
        .getRawMany();
};
