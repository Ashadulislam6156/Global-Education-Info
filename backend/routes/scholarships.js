const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all scholarships
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT s.*, u.name as university_name 
            FROM scholarships s 
            JOIN universities u ON s.university_id = u.id 
            ORDER BY s.deadline
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get single scholarship
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`
            SELECT s.*, u.name as university_name 
            FROM scholarships s 
            JOIN universities u ON s.university_id = u.id 
            WHERE s.id = $1
        `, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Scholarship not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new scholarship
router.post('/', async (req, res) => {
    try {
        const { title, university_id, description, amount, deadline, requirements } = req.body;
        const result = await pool.query(
            'INSERT INTO scholarships (title, university_id, description, amount, deadline, requirements) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, university_id, description, amount, deadline, requirements]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update scholarship
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, university_id, description, amount, deadline, requirements } = req.body;
        const result = await pool.query(
            'UPDATE scholarships SET title = $1, university_id = $2, description = $3, amount = $4, deadline = $5, requirements = $6 WHERE id = $7 RETURNING *',
            [title, university_id, description, amount, deadline, requirements, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Scholarship not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete scholarship
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM scholarships WHERE id = $1 RETURNING *', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Scholarship not found' });
        }
        
        res.json({ message: 'Scholarship deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 