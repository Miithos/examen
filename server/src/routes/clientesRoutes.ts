import {Router} from 'express';

import clientesController from '../controllers/clientesController';


class ClientesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', clientesController.list);
        this.router.get('/:id', clientesController.consulta);
        this.router.post('/', clientesController.create);
        this.router.delete('/:id', clientesController.delete);
        this.router.put('/:id', clientesController.update);
        this.router.get('/get/last', clientesController.last);

    }
}

const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;