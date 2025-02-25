import { openDb } from '../../lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const db = await openDb();
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      await db.run(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
      );
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(400).json({ error: 'Email already exists' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}