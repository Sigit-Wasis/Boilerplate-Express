-- admin@example.com → admin123
-- test@example.com → test123
-- demo@example.com → demo123

INSERT INTO users (name, email, password, created_at, updated_at) VALUES
('Admin User', 'admin@example.com', '$2b$10$tJKiAdgxb8qFq62QwJQe0OyZQicSDbCA3KaM1O3c4kgqDPK1dR3yK', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Test User', 'test@example.com', '$2b$10$5YeNj6l3O8f.z4Ek03Y3r.98nQYNO0BZxCtzDwKMpgn9rA1HvJU/G', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Demo User', 'demo@example.com', '$2b$10$xV43cm1hZj4wPb5n92mJquMzDCXQksvT1nr5nrLNS7lBzRrwS52fK', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
