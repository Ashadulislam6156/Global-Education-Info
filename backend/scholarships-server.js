const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Demo scholarships data
const scholarships = [
  {
    id: 1,
    title: "Harvard University Scholarship",
    university_name: "Harvard University",
    amount: 50000,
    deadline: "2025-12-01",
    description: "The Harvard Presidential Scholarship is awarded to exceptional students...",
    requirements: "Outstanding academic achievement, leadership potential, etc.",
    country: "USA",
    level: "undergraduate",
    type: "merit"
  },
  {
    id: 2,
    title: "Rhodes Scholarship",
    university_name: "University of Oxford",
    amount: 15000,
    deadline: "2025-10-15",
    description: "The Rhodes Scholarship is one of the oldest and most prestigious...",
    requirements: "Academic excellence, leadership, etc.",
    country: "UK",
    level: "graduate",
    type: "merit"
  },
  // ... আরও ডেমো ডেটা যোগ করুন ...
];

// GET /api/scholarships (with optional filters)
app.get('/api/scholarships', (req, res) => {
  let result = scholarships;

  // Optional filters
  const { country, level, type, search } = req.query;
  if (country) result = result.filter(s => s.country.toLowerCase() === country.toLowerCase());
  if (level) result = result.filter(s => s.level.toLowerCase() === level.toLowerCase());
  if (type && type !== 'all') result = result.filter(s => s.type.toLowerCase() === type.toLowerCase());
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.university_name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  }

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Scholarships API running at http://localhost:${PORT}/api/scholarships`);
});
