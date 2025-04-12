"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetailRepository = exports.SaleRepository = void 0;
const data_source_1 = require("../config/data-source");
const Sale_entity_1 = require("../entities/Sale.entity");
const SaleDetail_entity_1 = require("../entities/SaleDetail.entity");
exports.SaleRepository = data_source_1.AppDataSource.getRepository(Sale_entity_1.Sale);
exports.SaleDetailRepository = data_source_1.AppDataSource.getRepository(SaleDetail_entity_1.SaleDetail);
