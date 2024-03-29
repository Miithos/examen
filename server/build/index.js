"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const articulosRoutes_1 = __importDefault(require("./routes/articulosRoutes"));
const configuracionRoutes_1 = __importDefault(require("./routes/configuracionRoutes"));
const ventasRoutes_1 = __importDefault(require("./routes/ventasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/clientes', clientesRoutes_1.default);
        this.app.use('/api/articulos', articulosRoutes_1.default);
        this.app.use('/api/configuracion', configuracionRoutes_1.default);
        this.app.use('/api/ventas', ventasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
