import {Router} from 'express';

import ventasController from '../controllers/ventasController';


class VentasRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ventasController.list);
        this.router.get('/articulos', ventasController.listarticulos);
        //this.router.get('/articulos/:articulo', ventasController.articulovalido);
        //this.router.get('/articulo/cantidad', ventasController.cantidadvalida);
        this.router.get('/clientes', ventasController.listclientes);
        this.router.post('/', ventasController.create);
    }
}

const ventasRoutes = new VentasRoutes();
export default ventasRoutes.router;