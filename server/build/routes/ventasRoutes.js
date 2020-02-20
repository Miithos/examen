"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = __importDefault(require("../controllers/ventasController"));
class VentasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ventasController_1.default.list);
        this.router.get('/articulos', ventasController_1.default.listarticulos);
        //this.router.get('/articulos/:articulo', ventasController.articulovalido);
        //this.router.get('/articulo/cantidad', ventasController.cantidadvalida);
        this.router.get('/clientes', ventasController_1.default.listclientes);
        this.router.post('/', ventasController_1.default.create);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
