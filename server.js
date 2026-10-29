const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Подключение к облачной базе данных Supabase
const pool = new Pool({
    connectionString: 'postgresql://postgres:2281488322economics@db.jfqhfvlegsocpwhlgyrz.supabase.co:6543/postgres',
    ssl: { rejectUnauthorized: false } 
});

// API для получения данных из базы
app.get('/api/experiments', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                time_in_alcohol_s::numeric as x, 
                breaking_force_n::numeric as y 
            FROM pla_experiments
        `);
        res.json(result.rows);
    } catch (err) {
        console.error('Ошибка БД:', err);
        res.status(500).json({ error: 'Ошибка базы данных' });
    }
});

// Отдача HTML файла
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}!`);
});