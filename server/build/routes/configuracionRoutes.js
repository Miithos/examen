"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configuracionController_1 = __importDefault(require("../controllers/configuracionController"));
class ConfiguracionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', configuracionController_1.default.list);
        this.router.post('/', configuracionController_1.default.actualiza);
    }
}
const configuracionRoutes = new ConfiguracionRoutes();
exports.default = configuracionRoutes.router;
