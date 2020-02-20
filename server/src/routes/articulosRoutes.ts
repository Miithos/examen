import {Router} from 'express';

import articulosController from '../controllers/articulosController';


class ArticulosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', articulosController.list);
        this.router.get('/:id', articulosController.consulta);
        this.router.post('/', articulosController.create);
        this.router.put('/', articulosController.update);
        this.router.get('/get/last', articulosController.last);
    }
}

const articulosRoutes = new ArticulosRoutes();  
export default articulosRoutes.router;