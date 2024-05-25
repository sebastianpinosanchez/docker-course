CREATE TABLE IF NOT EXISTS best_teacher (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Insert sample data
INSERT INTO best_teacher (name) VALUES
  ('Sample Data 1'),
  ('Sample Data 2'),
  ('Sample Data 3');