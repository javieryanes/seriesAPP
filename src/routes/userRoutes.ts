import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js'

const router = express.Router();

router.get('/', getUsers);
/**
 * Cuando se accede a '/users' con una peticion post, se llama a createUser, un controlador
 */
router.post('/', createUser);

export default router;