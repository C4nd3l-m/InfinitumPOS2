
import { AppDataSource } from "../config/data-source";
import { SaleDetail } from "../entities/SaleDetail.entity";

export const getTopSellingProducts = async (limit = 10) => {
    const saleRepo = AppDataSource.getRepository(SaleDetail);

    return await saleRepo
    .createQueryBuilder("sd")
    .leftJoin("products", "p", "p.id = sd.productId")
    .select("p.name", "name")
    .addSelect("SUM(sd.quantity)", "totalSold")
    .groupBy("p.name")
    .orderBy("totalSold", "DESC")
    .limit(limit)
    .getRawMany();


};
