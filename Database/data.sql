   CREATE DATABASE global_education;
   CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE universities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    country VARCHAR(100) NOT NULL,
    description TEXT,
    ranking INTEGER,
    website VARCHAR(255),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scholarships (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    university_id INTEGER REFERENCES universities(id),
    description TEXT,
    amount DECIMAL,
    deadline DATE,
    requirements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE university_subjects (
    university_id INTEGER REFERENCES universities(id),
    subject_id INTEGER REFERENCES subjects(id),
    PRIMARY KEY (university_id, subject_id)
); 

CREATE TABLE universities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    country VARCHAR(100),
    ranking INT,
    programs TEXT[],
    website TEXT,
    minGPA NUMERIC,
    scholarships TEXT[]
);

ALTER TABLE universities
ADD COLUMN programs TEXT[],
ADD COLUMN website TEXT,
ADD COLUMN minGPA NUMERIC,
ADD COLUMN scholarships TEXT[];


INSERT INTO universities (name, country, ranking, programs, website, minGPA, scholarships)
VALUES (
  'University of Oxford',
  'UK',
  2,
  ARRAY['Computer Science', 'Law', 'Business'],
  'https://www.ox.ac.uk/',
  3.7,
  ARRAY['Rhodes', 'Chevening']
);

UPDATE universities
SET programs = ARRAY['Computer Science', 'Law'],
    website = 'https://www.ox.ac.uk/',
    minGPA = 3.7,
    scholarships = ARRAY['Rhodes', 'Chevening']
WHERE name = 'University of Oxford';


ALTER TABLE universities
ADD COLUMN programs TEXT[],
ADD COLUMN website TEXT,
ADD COLUMN minGPA NUMERIC,
ADD COLUMN scholarships TEXT[];