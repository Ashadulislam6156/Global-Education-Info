const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Demo subjects data
const subjects = [
  {
    name: "Computer Science",
    description: "Cutting-edge programs in AI, Software Engineering, Data Science, and Cybersecurity.",
    category: "cs",
    universities: [
      { name: "MIT" }, { name: "Stanford" }, { name: "ETH Zurich" }
    ]
  },
  {
    name: "Business Administration",
    description: "Degrees in Marketing, Finance, Entrepreneurship, and Management.",
    category: "business",
    universities: [
      { name: "Harvard" }, { name: "LBS" }, { name: "INSEAD" }
    ]
  },
  {
    name: "Engineering",
    description: "Mechanical, Civil, Electrical, Aerospace, and Biomedical Engineering.",
    category: "engineering",
    universities: [
      { name: "MIT" }, { name: "Imperial" }, { name: "TU Munich" }
    ]
  },
  // ... আরও সাবজেক্ট ডেটা যোগ করুন ...
];

// GET /api/subjects (with optional search/category filter)
app.get('/api/subjects', (req, res) => {
  let result = subjects;
  const { search, category } = req.query;

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      (s.universities && s.universities.some(u => u.name.toLowerCase().includes(q)))
    );
  }
  if (category) {
    result = result.filter(s => s.category === category);
  }

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Subjects API running at http://localhost:${PORT}/api/subjects`);
});
