"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleDetail = void 0;
const typeorm_1 = require("typeorm");
const Sale_entity_1 = require("./Sale.entity");
const Products_entity_1 = require("./Products.entity");
let SaleDetail = class SaleDetail {
};
exports.SaleDetail = SaleDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SaleDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Sale_entity_1.Sale, (sale) => sale.saleDetails, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: "saleId" }),
    __metadata("design:type", Sale_entity_1.Sale)
], SaleDetail.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Products_entity_1.Product, (product) => product.saleDetails, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: "productId" }),
    __metadata("design:type", Products_entity_1.Product)
], SaleDetail.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], SaleDetail.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], SaleDetail.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], SaleDetail.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], SaleDetail.prototype, "profit", void 0);
exports.SaleDetail = SaleDetail = __decorate([
    (0, typeorm_1.Entity)({ name: "sale_details" })
], SaleDetail);
