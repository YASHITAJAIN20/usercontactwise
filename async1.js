export async function initDb() {
    const db = await openDb();
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        emailVerified BOOLEAN DEFAULT false,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS tenants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS user_tenants (
        userId INTEGER,
        tenantId INTEGER,
        role TEXT,
        FOREIGN KEY(userId) REFERENCES users(id),
        FOREIGN KEY(tenantId) REFERENCES tenants(id)
      );
    `);
    console.log('Database initialized');
  }