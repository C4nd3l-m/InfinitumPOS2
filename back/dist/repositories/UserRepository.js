"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const User_entity_1 = require("../entities/User.entity");
const UserRepository = data_source_1.AppDataSource.getRepository(User_entity_1.User);
exports.default = UserRepository;
