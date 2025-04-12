import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Sale } from "../entities/Sale.entity";
import { SaleDetail } from "../entities/SaleDetail.entity";

export const SaleRepository: Repository<Sale>  = AppDataSource.getRepository(Sale);
export const SaleDetailRepository: Repository<SaleDetail> = AppDataSource.getRepository(SaleDetail)

