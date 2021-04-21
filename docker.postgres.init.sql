CREATE TABLE IF NOT EXISTS quotes
(
    id SERIAL PRIMARY KEY NOT NULL,
    author TEXT NOT NULL,
    "text" TEXT NOT NULL,
    source TEXT NOT NULL,
    tags TEXT[],
    createdBy TEXT,
    createdAt TEXT,
    updatedAt TEXT,
    isDeleted BOOLEAN
);

INSERT INTO quotes(author, text, source, tags, createdBy, createdAt, updatedAt, isDeleted) VALUES
 ('Author 1', 'text 1', 'Source 1', ARRAY ['tag 1', 'tag 2'], 'createdBy', 'createdAt', 'updatedAt', false);

