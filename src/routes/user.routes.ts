import { Router } from 'express';
import { getAllUsers, createUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
