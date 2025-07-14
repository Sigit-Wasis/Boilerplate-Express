import { db } from '../config/database';

export const findAllUsers = async () => {
    const result = await db.query('SELECT id, name, email FROM users');
    return result.rows;
};

export const findUserById = async (id: string) => {
    const result = await db.query('SELECT id, name, email FROM users WHERE id = $1', [id]);
    return result.rows[0] || null;
};

export const findUserByEmail = async (email: string) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0] || null;
};

export const insertUser = async (data: { name: string; email: string }) => {
    const result = await db.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [data.name, data.email, 'default']
    );
    return result.rows[0];
};

export const modifyUser = async (id: string, data: { name?: string; email?: string }) => {
    const existing = await findUserById(id);
    if (!existing) return null;

    const updated = {
        name: data.name || existing.name,
        email: data.email || existing.email
    };

    const result = await db.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email',
        [updated.name, updated.email, id]
    );

    return result.rows[0];
};

export const removeUserById = async (id: string): Promise<boolean> => {
    const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
    return (result.rowCount ?? 0) > 0;
};