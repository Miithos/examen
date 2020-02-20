import { Request, Response } from 'express';

import pool from '../database';

class VentasController {

    public async list(req: Request, res: Response) {

    }

    public async create (req: Request, res: Response): Promise<void> {
        
    }

    public async listarticulos(req: Request, res: Response) {
        const articulos = await pool.then((r: any) => r.query('SELECT * FROM articulos'));
        res.json(articulos);
    }

    public async listclientes(req: Request, res: Response) {
        const clientes = await pool.then((r: any) => r.query('SELECT * FROM clientes'));
        res.json(clientes);
    }

}

export const ventasController = new VentasController();
export default ventasController;