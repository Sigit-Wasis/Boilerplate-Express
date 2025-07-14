import {
    findUserById,
    findAllUsers,
    insertUser,
    modifyUser,
    removeUserById
} from '../repositories/user.repository';

export const getUserDetail = async (id: string) => {
    const user = await findUserById(id);
    if (!user) throw new Error('User not found');
    return user;
};

export const getAllUsers = async () => {
    return await findAllUsers();
};

export const createUser = async (data: { name: string; email: string, password: string }) => {
    return await insertUser(data);
};

export const updateUser = async (id: string, data: { name?: string; email?: string }) => {
    const updated = await modifyUser(id, data);
    if (!updated) throw new Error('User not found or update failed');
    return updated;
};

export const deleteUser = async (id: string) => {
    const success = await removeUserById(id);
    if (!success) throw new Error('User not found or delete failed');
};