import ISaleDetailDto from "../dto/SaleDetailDto";
import { SaleStatus } from "../enums/SaleStatus"; 


interface ISaleDto {
    date: Date;
    time: string;
    userId: number;
    paymentMethod: "cash" | "card";
    totalPrice: number;
    totalProfit: number;
    status: SaleStatus;
    saleDetails: ISaleDetailDto[]; 
}

export default ISaleDto;


