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
exports.Sale = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("./User.entity");
const SaleDetail_entity_1 = require("./SaleDetail.entity");
const SaleStatus_1 = require("../enums/SaleStatus");
let Sale = class Sale {
};
exports.Sale = Sale;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sale.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], Sale.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time", nullable: false }),
    __metadata("design:type", String)
], Sale.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (user) => user.sales, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", User_entity_1.User)
], Sale.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ["cash", "card"], nullable: false }),
    __metadata("design:type", String)
], Sale.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], Sale.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], Sale.prototype, "totalProfit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SaleDetail_entity_1.SaleDetail, (saleDetail) => saleDetail.sale, { cascade: true }),
    __metadata("design:type", Array)
], Sale.prototype, "saleDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: SaleStatus_1.SaleStatus,
        default: SaleStatus_1.SaleStatus.Completed,
    }),
    __metadata("design:type", String)
], Sale.prototype, "status", void 0);
exports.Sale = Sale = __decorate([
    (0, typeorm_1.Entity)({ name: "sales" })
], Sale);
