import { openDb } from '../../lib/db';

export default async function handler(req, res) {
  const db = await openDb();
  if (req.method === 'POST') {
    const { name } = req.body;
    await db.run('INSERT INTO tenants (name) VALUES (?)', [name]);
    res.status(201).json({ message: 'Tenant created successfully' });
  } else if (req.method === 'GET') {
    const tenants = await db.all('SELECT * FROM tenants');
    res.status(200).json(tenants);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}