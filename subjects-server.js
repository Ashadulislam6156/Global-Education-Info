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
  {
    name: "Medicine",
    description: "Medical programs including MBBS, Nursing, Dentistry, Public Health, and Biomedical Sciences from globally recognized institutions.",
    category: "medicine",
    universities: [
      { name: "Harvard Medical School" }, { name: "Johns Hopkins" }, { name: "Oxford Medical" }
    ]
  },
  {
    name: "Arts & Humanities",
    description: "Explore literature, history, philosophy, languages, and fine arts programs from leading global universities with rich cultural heritage.",
    category: "arts",
    universities: [
      { name: "Yale" }, { name: "Oxford" }, { name: "Sorbonne" }
    ]
  },
  {
    name: "Law & Legal Studies",
    description: "Comprehensive law degrees including LLB, JD, International Law, and Human Rights Law at prestigious institutions like Oxford, Yale, and Harvard.",
    category: "law",
    universities: [
      { name: "Harvard Law" }, { name: "Yale Law" }, { name: "Oxford Law" }
    ]
  },
  {
    name: "Education & Teaching",
    description: "Innovative programs in Teaching Methods, Curriculum Development, Educational Technology, and Leadership from top universities.",
    category: "education",
    universities: [
      { name: "UCL" }, { name: "Harvard" }, { name: "Stanford" }
    ]
  },
  {
    name: "Natural Sciences",
    description: "Programs in Physics, Chemistry, Biology, Mathematics, and Earth Sciences from leading research universities with state-of-the-art laboratories.",
    category: "science",
    universities: [
      { name: "Caltech" }, { name: "Cambridge" }, { name: "MIT" }
    ]
  },
  {
    name: "Architecture & Design",
    description: "Creative programs in Architecture, Interior Design, Urban Planning, and Landscape Architecture from world-class design schools.",
    category: "architecture",
    universities: [
      { name: "MIT" }, { name: "UCL" }, { name: "ETH Zurich" }
    ]
  },
  {
    name: "Pharmaceutical Sciences",
    description: "Comprehensive programs in Pharmacy, Pharmacology, Drug Development, and Clinical Research with hands-on laboratory experience and industry placements.",
    category: "pharmacy",
    universities: [
      { name: "UCL" }, { name: "Monash" }, { name: "Harvard" }
    ]
  }
];

// GET /api/subjects (with optional search/category filter)
app.get('/api/subjects', (req, res) => {
  console.log(req.query);
  let result = subjects;
  const { search, category } = req.query;

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      (s.category && s.category.toLowerCase().includes(q)) ||
      (s.universities && s.universities.some(u => u.name.toLowerCase().includes(q))) ||
      (q === 'pharmacy' && (s.name.toLowerCase().includes('pharma') || s.category === 'pharmacy'))
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