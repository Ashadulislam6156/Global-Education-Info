const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all subjects
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM subjects ORDER BY name');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get single subject
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`
            SELECT s.*, 
                   json_agg(json_build_object('id', u.id, 'name', u.name)) as universities
            FROM subjects s
            LEFT JOIN university_subjects us ON s.id = us.subject_id
            LEFT JOIN universities u ON us.university_id = u.id
            WHERE s.id = $1
            GROUP BY s.id
        `, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new subject
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        const result = await pool.query(
            'INSERT INTO subjects (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update subject
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const result = await pool.query(
            'UPDATE subjects SET name = $1, description = $2 WHERE id = $3 RETURNING *',
            [name, description, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete subject
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM subjects WHERE id = $1 RETURNING *', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        
        res.json({ message: 'Subject deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 