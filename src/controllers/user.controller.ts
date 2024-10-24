import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const newUser = await userService.createUser(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await userService.deleteUser(parseInt(id));
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
