const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/tickets', (req, res) => {
    const folderPath = '/exam'; // Укажите путь к папке с билетами на вашем сервере
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка сервера');
        } else {
            const tickets = files.map(file => path.parse(file).name);
            res.json(tickets);
        }
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
