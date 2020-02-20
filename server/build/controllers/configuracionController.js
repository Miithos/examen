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
class ConfiguracionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const configuracion = yield database_1.default.then((r) => r.query('SELECT * FROM configuracionventa LIMIT 1'));
            res.json(configuracion);
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tasa, enganche, plaza } = req.body;
            const query = `
            CALL configuracionEdit(?, ?, ?);
        `;
            yield database_1.default.then((r) => r.query(query, [tasa, enganche, plaza]));
            res.json({ mensaje: 'Bien Hecho. La configuración ha sido registrada' });
        });
    }
}
exports.configuracionController = new ConfiguracionController();
exports.default = exports.configuracionController;
