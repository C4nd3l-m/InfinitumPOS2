import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { SaleDetail } from "../entities/SaleDetail.entity";
import { Product } from "../entities/Products.entity";

export const ProductRepository: Repository<Product>  = AppDataSource.getRepository(Product);

export const getTopSellingProducts = async (limit = 10) => {
    const saleRepo = AppDataSource.getRepository(SaleDetail);

    return await saleRepo.query(`
  SELECT 
    p.name AS name,
    SUM(sd.quantity) AS "totalSold"
  FROM 
    sale_details sd
  JOIN 
    products p ON p.id = sd."productId"
  GROUP BY 
    p.name
  ORDER BY 
    "totalSold" DESC
  LIMIT $1
`, [limit]);

};
