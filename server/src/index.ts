import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clientesRoutes';
import articulosRoutes from './routes/articulosRoutes';
import configuracionRoutes from './routes/configuracionRoutes';
import ventasRoutes from './routes/ventasRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/clientes', clientesRoutes);
        this.app.use('/api/articulos', articulosRoutes);
        this.app.use('/api/configuracion', configuracionRoutes);
        this.app.use('/api/ventas', ventasRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port`, this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();