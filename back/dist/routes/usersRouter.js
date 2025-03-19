"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter = (0, express_1.Router)();
usersRouter.get("/:id", (req, res) => getUserById(req, res));
usersRouter.post("/register", (req, res) => userLoguinController(req, res));
exports.default = usersRouter;
