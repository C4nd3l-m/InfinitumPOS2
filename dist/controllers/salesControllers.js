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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelSaleController = exports.postSaleController = exports.getSalesByUserIdController = exports.getSalesController = void 0;
const salesService_1 = require("../services/salesService");
const salesService_2 = require("../services/salesService");
const console_1 = require("console");
const getSalesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceResponse = yield (0, salesService_2.getSalesService)();
        res.status(200).json({
            data: serviceResponse
        });
    }
    catch (_a) {
        res.status(404).json({ error: "Error" + console_1.error });
    }
});
exports.getSalesController = getSalesController;
const getSalesByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const serviceResponse = yield (0, salesService_2.getSaleByIdService)(parseInt(id, 10));
        res.status(200).json({
            data: serviceResponse
        });
    }
    catch (error) {
        console.error("Error in getSalesByUserIdController", error);
        res.status(404).json({
            error: "Error al obtener la venta"
        });
    }
});
exports.getSalesByUserIdController = getSalesByUserIdController;
const postSaleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceResponse = yield (0, salesService_1.createSaleService)(req.body);
        res.status(201).json({
            data: serviceResponse
        });
    }
    catch (error) {
        console.error("error in sale" + error);
        res.status(400).json({ error });
    }
});
exports.postSaleController = postSaleController;
const cancelSaleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const serviceResponse = yield (0, salesService_2.cancelSaleService)(parseInt(id, 10));
        res.status(200).json({
            data: serviceResponse
        });
    }
    catch (error) {
        console.error(error);
        res.status(404).json({
            error: "Id not found"
        });
    }
});
exports.cancelSaleController = cancelSaleController;
