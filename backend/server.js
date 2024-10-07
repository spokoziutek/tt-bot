const express = require('express');
const path = require('path');
const fetchData = require ('./api/fetchData.js'); // Użyj import (dodaj .js na końcu)

const app = express();

// Ustawienie serwera na obsługę plików statycznych z folderu 'src'
app.use(express.static(path.join(__dirname, '../build')));

// Endpoint dla głównej strony
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html')); // Wysyłaj plik index.html
});

// Endpoint API, który zwraca więcej niż jedną wartość
app.get('/api/status', async (req, res) => {
    try {
        const data = await fetchData(); // Uzyskanie danych z fetchData
        res.json(data); // Zwracamy wszystkie dane jako JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching status' }); // Obsługa błędów
    }
});

// Serwer nasłuchuje na porcie
const PORT = process.env.PORT || 3000; // Użycie portu zenv
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Informacja o uruchomieniu
});