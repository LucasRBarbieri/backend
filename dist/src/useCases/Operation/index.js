"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationUseCase = void 0;
const OperationRepo_1 = require("../../repositories/implementation/OperationRepo");
const OperationUseCase_1 = require("./OperationUseCase");
const ClienteRepo_1 = require("../../repositories/implementation/ClienteRepo");
const operationRepo = new OperationRepo_1.OperationRepo();
const clientRepo = new ClienteRepo_1.ClienteRepo();
const operationUseCase = new OperationUseCase_1.OperationUseCase(operationRepo, clientRepo);
exports.operationUseCase = operationUseCase;
