const express = require('express');
const { createItem, getAllItems, getItemById, updateItem, deleteItem, items } = require('./src/crud');

const app = express();
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota para criar um item
app.post('/items', (req, res) => {
    try {
        const newItem = createItem(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para listar todos os itens
app.get('/items', (req, res) => {
    const allItems = getAllItems();
    res.status(200).json(allItems);
});

// Rota para buscar um item por ID
app.get('/items/:id', (req, res) => {
    try {
        const item = getItemById(parseInt(req.params.id));
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Rota para atualizar um item
app.put('/items/:id', (req, res) => {
    try {
        const updatedItem = updateItem(parseInt(req.params.id), req.body);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Rota para deletar um item
app.delete('/items/:id', (req, res) => {
    try {
        const result = deleteItem(parseInt(req.params.id));
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});