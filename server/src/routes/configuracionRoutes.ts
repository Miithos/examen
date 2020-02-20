import {Router} from 'express';

import configuracionController from '../controllers/configuracionController';


class ConfiguracionRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', configuracionController.list);
        this.router.post('/', configuracionController.actualiza);
    }
}

const configuracionRoutes = new ConfiguracionRoutes();
export default configuracionRoutes.router;