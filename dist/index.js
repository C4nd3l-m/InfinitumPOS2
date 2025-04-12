"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("DB conection");
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server listen on port ${envs_1.PORT}`);
    });
})
    .catch((error) => {
    console.log("Error conection", error);
});
