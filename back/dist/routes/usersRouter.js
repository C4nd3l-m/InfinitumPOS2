"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const usersRouter = (0, express_1.Router)();
usersRouter.get("/:id", (req, res) => (0, userControllers_1.getUserByIdController)(req, res));
usersRouter.post("/register", (req, res) => (0, userControllers_1.userRegisterController)(req, res));
usersRouter.post("/login", (req, res) => (0, userControllers_1.userLoginController)(req, res));
exports.default = usersRouter;
