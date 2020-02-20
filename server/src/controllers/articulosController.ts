import { Request, Response } from 'express';

import pool from '../database';

class ArticulosController {

    public async list(req: Request, res: Response) {
        const articulos = await pool.then((r: any) => r.query('SELECT * FROM articulos'));
        res.json(articulos);
    }

    public async consulta (req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        const articulo = await pool.then((r: any) => r.query('SELECT * FROM articulos WHERE articulo = ?', [id]));
        if(articulo.length > 0) {
            return res.json(articulo[0]);
        }
        res.status(404).json({mensaje: "El articulo no existe"});
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        const {opcion, articulo, descripcion, modelo, precio, existencia} = req.body;

        const query = `
            CALL articuloEdit(?, ?, ?, ?, ?, ?);
        `;
        
        await pool.then((r: any) => r.query(query, [opcion, articulo, descripcion, modelo, precio, existencia]));
        res.json({mensaje: 'Bien Hecho. El Articulo ha sido registrado correctamente'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {opcion, articulo, descripcion, modelo, precio, existencia} = req.body;

        const query = `
            CALL articuloEdit(?, ?, ?, ?, ?, ?);
        `;
        await pool.then((r: any) => r.query(query, [opcion, articulo, descripcion, modelo, precio, existencia]));
        res.json({mensaje: 'Articulo Actualizado'});
    }

    public async last(req: Request, res: Response) {
        const articulos = await pool.then((r: any) => r.query('SELECT articulo FROM articulos ORDER BY articulo DESC LIMIT 1'));
        res.json(articulos);
    }

}

export const articulosController = new ArticulosController();
export default articulosController;