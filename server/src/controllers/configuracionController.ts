import { Request, Response } from 'express';

import pool from '../database';

class ConfiguracionController {

    public async list(req: Request, res: Response) {
        const configuracion = await pool.then((r: any) => r.query('SELECT * FROM configuracionventa LIMIT 1'));
        res.json(configuracion);
    }

    public async actualiza (req: Request, res: Response): Promise<void> {
        const {tasa, enganche, plaza} = req.body;

        const query = `
            CALL configuracionEdit(?, ?, ?);
        `;
        
        await pool.then((r: any) => r.query(query, [tasa, enganche, plaza]));
        res.json({mensaje: 'Bien Hecho. La configuración ha sido registrada'});
    }

}

export const configuracionController = new ConfiguracionController();
export default configuracionController;