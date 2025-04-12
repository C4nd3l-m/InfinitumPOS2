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
exports.checkUserCredentials = exports.getCredentialService = void 0;
const Credentials_entity_1 = require("../entities/Credentials.entity");
const CredentialRepository_1 = __importDefault(require("../repositories/CredentialRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const checkUserExist = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialFound = yield CredentialRepository_1.default.findOne({ where: { username } });
    if (credentialFound) {
        throw new Error(`El usuario ${username} ya existe`);
    }
});
const getCredentialService = (entityManager, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield checkUserExist(username);
    const passwordEncrypted = yield bcrypt_1.default.hash(password, 10);
    const objCredentials = entityManager.create(Credentials_entity_1.Credential, {
        username,
        password: passwordEncrypted,
    });
    return yield entityManager.save(objCredentials);
});
exports.getCredentialService = getCredentialService;
const checkUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialFound = yield CredentialRepository_1.default.findOne({ where: { username } });
    if (!credentialFound)
        throw new Error("Usuario o contraseña incorrectos");
    const isPassValid = yield bcrypt_1.default.compare(password, credentialFound.password);
    if (!isPassValid)
        throw new Error("Usuario o contraseña incorrectos");
    return credentialFound.id;
});
exports.checkUserCredentials = checkUserCredentials;
