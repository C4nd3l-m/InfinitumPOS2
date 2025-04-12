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
exports.loginUserService = exports.createUserService = exports.getUserByIdService = void 0;
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const User_entity_1 = require("../entities/User.entity");
const credentialsService_1 = require("./credentialsService");
const data_source_1 = require("../config/data-source");
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield UserRepository_1.default.findOne({
        where: { id },
        relations: ["credentials", "sales", "sales.saleDetails", "sales.saleDetails.product"]
    });
    if (!userFound)
        throw new Error("User not found");
    return {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        birthDate: userFound.birthDate,
        sales: userFound.sales.map(sale => ({
            date: sale.date,
            time: sale.time,
            userId: sale.user.id,
            paymentMethod: sale.paymentMethod,
            totalPrice: sale.totalPrice,
            totalProfit: sale.totalProfit,
            status: sale.status,
            saleDetails: sale.saleDetails.map(detail => ({
                productId: detail.product.id,
                quantity: detail.quantity,
                unitPrice: detail.unitPrice,
                subtotal: detail.subtotal,
                profit: detail.profit
            }))
        }))
    };
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield data_source_1.AppDataSource.transaction((entityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const userCredentials = yield (0, credentialsService_1.getCredentialService)(entityManager, user.username, user.password);
        console.log("Credentials created");
        const newUser = entityManager.create(User_entity_1.User, {
            name: user.name,
            email: user.email,
            birthDate: new Date(user.birthDate),
            credentials: userCredentials
        });
        const savedUser = yield entityManager.save(newUser);
        console.log("User created", savedUser);
        return savedUser;
    }));
    return result;
});
exports.createUserService = createUserService;
const loginUserService = (userCredentials) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialId = yield (0, credentialsService_1.checkUserCredentials)(userCredentials.username, userCredentials.password);
    const userFound = yield UserRepository_1.default.findOne({
        where: {
            credentials: {
                id: credentialId
            }
        },
        relations: ["credentials"]
    });
    return {
        login: true,
        user: {
            id: userFound === null || userFound === void 0 ? void 0 : userFound.id,
            name: userFound === null || userFound === void 0 ? void 0 : userFound.name,
            email: userFound === null || userFound === void 0 ? void 0 : userFound.email,
            birthDate: userFound === null || userFound === void 0 ? void 0 : userFound.birthDate,
            credentialId: userFound === null || userFound === void 0 ? void 0 : userFound.credentials.id
        }
    };
});
exports.loginUserService = loginUserService;
