import { SaleRepository } from "../repositories/SalesRepository";
import ISaleDto from "../dto/SaleDto";
import { Sale } from "../entities/Sale.entity";
import { SaleStatus } from "../enums/SaleStatus"
import { DeepPartial } from "typeorm";
import UserRepository from "../repositories/UserRepository";

export const getSalesService = async (): Promise<Sale[]> => {
    return await SaleRepository.find({
        relations: {
            user: true,
        },
    })
}

export const getSaleByIdService = async (id: number) => {
    const saleFound = SaleRepository.findOne({
        where: { id },
        relations: ["user"]
    })

    if (!saleFound) throw new Error("Sale not found")
    else return saleFound;
}

export const createSaleService = async (saleData: ISaleDto): Promise<Sale> => {
    const user = await UserRepository.findOneBy({ id: saleData.userId });
    if (!user) {
        throw new Error("User not found");
    }

    const statusMapped = saleData.status === SaleStatus.Completed
    ? SaleStatus.Completed
        : SaleStatus.Cancelled;

    const saleToCreate: DeepPartial<Sale> = {
        date: saleData.date,
        time: saleData.time,
        user,
        paymentMethod: saleData.paymentMethod,
        totalPrice: saleData.totalPrice,
        totalProfit: saleData.totalProfit,
        status: statusMapped,
        saleDetails: saleData.saleDetails
    };

    const newSale = SaleRepository.create(saleToCreate);
    return await SaleRepository.save(newSale);
};

export const cancelSaleService = async (id: number) =>{
    const sale = await SaleRepository.findOneBy({id});
    if(!sale) throw new Error("sale not found")
    
        sale.status = SaleStatus.Cancelled;

        await SaleRepository.save(sale)
        
        return{
            id: sale.id,
            date: sale.date,
            time: sale.time,
            userId: sale.user,
            status: sale.status,
        }
}