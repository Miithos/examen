"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulosController_1 = __importDefault(require("../controllers/articulosController"));
class ArticulosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', articulosController_1.default.list);
        this.router.get('/:id', articulosController_1.default.consulta);
        this.router.post('/', articulosController_1.default.create);
        this.router.put('/', articulosController_1.default.update);
        this.router.get('/get/last', articulosController_1.default.last);
    }
}
const articulosRoutes = new ArticulosRoutes();
exports.default = articulosRoutes.router;
