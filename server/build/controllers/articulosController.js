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
class ArticulosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articulos = yield database_1.default.then((r) => r.query('SELECT * FROM articulos'));
            res.json(articulos);
        });
    }
    consulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const articulo = yield database_1.default.then((r) => r.query('SELECT * FROM articulos WHERE articulo = ?', [id]));
            if (articulo.length > 0) {
                return res.json(articulo[0]);
            }
            res.status(404).json({ mensaje: "El articulo no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { opcion, articulo, descripcion, modelo, precio, existencia } = req.body;
            const query = `
            CALL articuloEdit(?, ?, ?, ?, ?, ?);
        `;
            yield database_1.default.then((r) => r.query(query, [opcion, articulo, descripcion, modelo, precio, existencia]));
            res.json({ mensaje: 'Bien Hecho. El Articulo ha sido registrado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { opcion, articulo, descripcion, modelo, precio, existencia } = req.body;
            const query = `
            CALL articuloEdit(?, ?, ?, ?, ?, ?);
        `;
            yield database_1.default.then((r) => r.query(query, [opcion, articulo, descripcion, modelo, precio, existencia]));
            res.json({ mensaje: 'Articulo Actualizado' });
        });
    }
    last(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articulos = yield database_1.default.then((r) => r.query('SELECT articulo FROM articulos ORDER BY articulo DESC LIMIT 1'));
            res.json(articulos);
        });
    }
}
exports.articulosController = new ArticulosController();
exports.default = exports.articulosController;
