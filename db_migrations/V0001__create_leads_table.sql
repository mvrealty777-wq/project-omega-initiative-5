CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(100),
    email VARCHAR(255),
    message TEXT,
    source VARCHAR(255),
    page_url TEXT,
    messenger VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    email_sent BOOLEAN DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);