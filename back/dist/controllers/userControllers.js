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
exports.userLoginController = exports.userRegisterController = exports.getUserByIdController = void 0;
const usersService_1 = require("../services/usersService");
const usersService_2 = require("../services/usersService");
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const responseService = yield (0, usersService_2.getUserByIdService)(parseInt(id, 10));
        res.status(200).json({
            message: "User Id",
            data: responseService
        });
    }
    catch (error) {
        res.status(404).json({
            message: "User not found",
            error: error
        });
    }
});
exports.getUserByIdController = getUserByIdController;
const userRegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceResponse = yield (0, usersService_2.createUserService)(req.body);
        res.status(201).json({
            message: "User registered successfully",
            data: serviceResponse
        });
    }
    catch (error) {
        console.error("Error registering user", error);
        res.status(400).json({ message: "Error registering user" });
    }
});
exports.userRegisterController = userRegisterController;
const userLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceResponse = yield (0, usersService_1.loginUserService)(req.body);
        res.status(200).json(serviceResponse);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Incorrect credentials",
            error: error
        });
    }
});
exports.userLoginController = userLoginController;
