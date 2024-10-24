
import User from '../models/user';

export const getAllUsers = async () => {
  return await User.findAll();
};

export const createUser = async (name: string, email: string) => {
  return await User.create({ name, email });
};

export const deleteUser = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  await user.destroy();
  return;
};
