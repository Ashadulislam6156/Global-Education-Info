const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Local university data
const universities = [
  {
    name: "University of Oxford",
    country: "UK",
    ranking: 2,
    programs: ["Computer Science", "Law", "Business"],
    website: "https://www.ox.ac.uk/",
    minGPA: 3.7,
    scholarships: ["Rhodes", "Chevening"]
  },
  {
    name: "Harvard University",
    country: "USA",
    ranking: 3,
    programs: ["Computer Science", "Engineering", "Business"],
    website: "https://www.harvard.edu/",
    minGPA: 3.8,
    scholarships: ["Fulbright", "AAUW"]
  },
  {
    name: "Stanford University",
    country: "USA",
    ranking: 4,
    programs: ["Engineering", "Business"],
    website: "https://www.stanford.edu/",
    minGPA: 3.7,
    scholarships: ["Knight-Hennessy"]
  }
  // ... আরও ডাটা চাইলে এখানে দিন
];

// Search API (no database)
app.post('/api/search', (req, res) => {
  const { query } = req.body;
  const q = query.toLowerCase();

  const results = universities.filter(uni =>
    uni.name.toLowerCase().includes(q) ||
    uni.country.toLowerCase().includes(q) ||
    uni.programs.some(p => p.toLowerCase().includes(q))
  );

  res.json({ universities: results });
});

app.listen(5001, () => {
  console.log('Server running on port 5001');
}); 