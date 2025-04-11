"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelSaleService = exports.createSaleService = exports.getSaleByIdService = exports.getSalesService = void 0;
const SalesRepository_1 = require("../repositories/SalesRepository");
const SaleStatus_1 = require("../enums/SaleStatus");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const getSalesService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield SalesRepository_1.SaleRepository.find({
        relations: {
            user: true,
        },
    });
});
exports.getSalesService = getSalesService;
const getSaleByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const saleFound = SalesRepository_1.SaleRepository.findOne({
        where: { id },
        relations: ["user"]
    });
    if (!saleFound)
        throw new Error("Sale not found");
    else
        return saleFound;
});
exports.getSaleByIdService = getSaleByIdService;
const createSaleService = (saleData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepository_1.default.findOneBy({ id: saleData.userId });
    if (!user) {
        throw new Error("User not found");
    }
    const statusMapped = saleData.status === "completed"
        ? SaleStatus_1.SaleStatus.Completed
        : SaleStatus_1.SaleStatus.Cancelled;
    const saleToCreate = {
        date: saleData.date,
        time: saleData.time,
        user,
        paymentMethod: saleData.paymentMethod,
        totalPrice: saleData.totalPrice,
        totalProfit: saleData.totalProfit,
        status: statusMapped,
        saleDetails: saleData.saleDetails
    };
    const newSale = SalesRepository_1.SaleRepository.create(saleToCreate);
    return yield SalesRepository_1.SaleRepository.save(newSale);
});
exports.createSaleService = createSaleService;
const cancelSaleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sale = yield SalesRepository_1.SaleRepository.findOneBy({ id });
    if (!sale)
        throw new Error("sale not found");
    sale.status = SaleStatus_1.SaleStatus.Cancelled;
    yield SalesRepository_1.SaleRepository.save(sale);
    return {
        id: sale.id,
        date: sale.date,
        time: sale.time,
        userId: sale.user,
        status: sale.status,
    };
});
exports.cancelSaleService = cancelSaleService;
