const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const usersinputRouter = require('./backend/routes/usersinput');
const usersRouter = require('./backend/routes/users');

// এনভায়রনমেন্ট ভেরিয়েবল লোড করা
dotenv.config();

const app = express();

// মিডলওয়্যার
app.use(cors());
app.use(express.json());

// PostgreSQL কানেকশন কনফিগারেশন
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'global_education',
    password: process.env.DB_PASSWORD || 'your_password',
    port: process.env.DB_PORT || 5432,
});

// ডাটাবেস কানেকশন টেস্ট
pool.connect()
    .then(() => console.log('PostgreSQL ডাটাবেসে কানেক্টেড'))
    .catch(err => console.error('PostgreSQL কানেকশন এরর:', err));


// রাউটস
app.use('/api/universities', require('./routes/universities'));
app.use('/api/scholarships', require('./routes/scholarships'));
app.use('/api/usersinput', usersinputRouter);
app.use('/api/users', usersRouter);

// FAQ উত্তর
const faqAnswers = {
  "which scholarships can i apply for": "You can apply for various scholarships based on your GPA, country, and subject. Visit our Scholarships page for details.",
  "how do i write an sop": "To write an SOP, start by describing your academic background, career goals, and why you chose the course/university. Be honest and specific.",
  "what documents are required for a student visa": "You generally need your passport, university admission letter, bank statement, SOP, and other supporting documents for a student visa.",
  "hello": "Hello! How can I assist you today?",
  "hi": "Hi there! How can I help you with your study abroad journey?",
  "thank you": "You're welcome! If you have more questions, feel free to ask."
};

function getFAQAnswer(message) {
  const text = message.toLowerCase();
  for (const key in faqAnswers) {
    if (text.includes(key)) return faqAnswers[key];
  }
  return null;
}

// FAQ Only Chat Route (reset to local FAQ, no AI)
app.post('/api/hybrid-chat', async (req, res) => {
  const { message } = req.body;
  const faqReply = getFAQAnswer(message);
  if (faqReply) return res.json({ reply: faqReply });
  res.json({ reply: "Sorry, I couldn't find an answer to your question. Please visit our FAQ or ask something else!" });
});

const PORT = process.env.PORT || 5000;

 app.use('/api/users', usersRouter);