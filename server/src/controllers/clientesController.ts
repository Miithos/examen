import { Request, Response } from 'express';

import pool from '../database';

class ClientesController {

    public async list(req: Request, res: Response) {
        const clientes = await pool.then((r: any) => r.query('SELECT * FROM clientes'));
        res.json(clientes);
    }

    public async consulta (req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        const cliente = await pool.then((r: any) => r.query('SELECT * FROM clientes WHERE id = ?', [id]));
        if(cliente.length > 0) {
            return res.json(cliente[0]);
        }
        res.status(404).json({mensaje: "el cliente no existe"});
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        const {id, nombre, appaterno, apmaterno, rfc} = req.body;

        const query = `
            CALL clienteEdit(?, ?, ?, ?, ?);
        `;
        
        await pool.then((r: any) => r.query(query, [id, nombre, appaterno, apmaterno, rfc]));
        res.json({mensaje: 'Cliente guardado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;

        await pool.then((r: any) => r.query('DELETE FROM clientes WHERE id = ?', [id]));
        res.json({mensaje: 'Cliente Eliminado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {nombre, appaterno, apmaterno, rfc} = req.body;
        const {id} = req.params;
    
        const query = `
            CALL clienteEdit(?, ?, ?, ?, ?);
        `;
        await pool.then((r: any) => r.query(query, [id, nombre, appaterno, apmaterno, rfc]));
        res.json({mensaje: 'Cliente Actualizado'});
    }

}

export const clientesController = new ClientesController();
export default clientesController;