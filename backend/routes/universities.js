const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all universities
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM universities ORDER BY ranking');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get single university
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM universities WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'University not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new university
router.post('/', async (req, res) => {
    try {
        const { name, country, description, ranking, website, image_url } = req.body;
        const result = await pool.query(
            'INSERT INTO universities (name, country, description, ranking, website, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, country, description, ranking, website, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update university
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, country, description, ranking, website, image_url } = req.body;
        const result = await pool.query(
            'UPDATE universities SET name = $1, country = $2, description = $3, ranking = $4, website = $5, image_url = $6 WHERE id = $7 RETURNING *',
            [name, country, description, ranking, website, image_url, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'University not found' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete university
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM universities WHERE id = $1 RETURNING *', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'University not found' });
        }
        
        res.json({ message: 'University deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;