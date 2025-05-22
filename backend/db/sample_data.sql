-- Insert sample universities with rankings
INSERT INTO universities (name, country, description, ranking, website, image_url) VALUES
('University of Oxford', 'UK', 'One of the oldest and most prestigious universities in the world.', 2, 'https://www.ox.ac.uk', './Images/oxford.jpeg'),
('Harvard University', 'USA', 'America''s oldest institution of higher learning.', 3, 'https://www.harvard.edu', './Images/harvard.jpeg'),
('University of Toronto', 'Canada', 'Canada''s leading institution of learning, discovery and knowledge creation.', 18, 'https://www.utoronto.ca', './Images/toronto.jpeg'),
('University of Melbourne', 'Australia', 'Australia''s leading university, consistently ranked among the world''s best.', 14, 'https://www.unimelb.edu.au', './Images/melborn.jpeg');

-- Insert sample scholarships
INSERT INTO scholarships (title, university_id, amount, deadline, description, requirements) VALUES
('Chevening Scholarship', 1, 50000, '2024-11-01', 'UK government''s global scholarship programme.', 'Leadership potential, academic excellence'),
('Rhodes Scholarship', 1, 75000, '2024-10-15', 'Oldest international scholarship programme.', 'Academic excellence, leadership, service'),
('Fulbright Scholarship', 2, 60000, '2024-09-30', 'US government''s flagship international educational exchange program.', 'Academic merit, leadership potential'),
('Lester B. Pearson Scholarship', 3, 55000, '2024-12-01', 'University of Toronto''s most prestigious scholarship.', 'Academic excellence, leadership, creativity'),
('Australia Awards', 4, 45000, '2024-08-31', 'Australian government''s international scholarship program.', 'Academic excellence, development impact'); 