import { error } from "console";
import { Request, Response } from "express";
import {User } from '../models/userModel.js'

/**
 * Función asíncrona para crear un usuario en la base de datos a partir de un modelo mongose
 * @param req - Contiene el usuario que se ha solicitado por el usuario
 * @param res - La respuesta qye da el servidor
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const user = new User(req.body);
        await user.save();
        if (!user) res.status(400).json({error: "Error al intentar obtener el usuario para crearlo"});
        else res.status(201).json(user);
    }
    catch (err: any) {
        res.status(400).json({ error: err.message });
    }
    
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
       const users = await User.find();
       res.status(200).json(users);
    }
    catch (err: any) {
       res.status(500).json({error: err.message})
    }
}