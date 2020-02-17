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
const database_1 = __importDefault(require("../database"));
class ClientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.then((r) => r.query('SELECT * FROM clientes'));
            res.json(clientes);
        });
    }
    consulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield database_1.default.then((r) => r.query('SELECT * FROM clientes WHERE id = ?', [id]));
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ mensaje: "el cliente no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nombre, appaterno, apmaterno, rfc } = req.body;
            const query = `
            CALL clienteEdit(?, ?, ?, ?, ?);
        `;
            yield database_1.default.then((r) => r.query(query, [id, nombre, appaterno, apmaterno, rfc]));
            res.json({ mensaje: 'Cliente guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM clientes WHERE id = ?', [id]));
            res.json({ mensaje: 'Cliente Eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, appaterno, apmaterno, rfc } = req.body;
            const { id } = req.params;
            const query = `
            CALL clienteEdit(?, ?, ?, ?, ?);
        `;
            yield database_1.default.then((r) => r.query(query, [id, nombre, appaterno, apmaterno, rfc]));
            res.json({ mensaje: 'Cliente Actualizado' });
        });
    }
}
exports.clientesController = new ClientesController();
exports.default = exports.clientesController;
