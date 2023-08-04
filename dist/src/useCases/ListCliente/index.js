"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listClienteController = exports.listClienteUseCase = void 0;
const ClienteRepo_1 = require("../../repositories/implementation/ClienteRepo");
const ListClienteUseCase_1 = require("./ListClienteUseCase");
const ListClienteController_1 = require("./ListClienteController");
const clienteRepo = new ClienteRepo_1.ClienteRepo();
const listClienteUseCase = new ListClienteUseCase_1.ListClienteUseCase(clienteRepo);
exports.listClienteUseCase = listClienteUseCase;
const listClienteController = new ListClienteController_1.ListClienteController(listClienteUseCase);
exports.listClienteController = listClienteController;
