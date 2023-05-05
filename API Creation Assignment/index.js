const express = require('express');
const app = express();

// Mock Data from postman
let data = [
    {
        id: 1,
        name: 'product_name_1',
        total_quantity: 12,
        type_of_product: 'T-shirt',
        price: 300
    },
    {
        id: 2,
        name: 'product_name_2',
        total_quantity: 8,
        type_of_product: 'Jeans',
        price: 500
    },
    {
        id: 3,
        name: 'product_name_3',
        total_quantity: 2,
        type_of_product: 'Pant',
        price: 300
    }
    
];
app.use(express.json());
app.get('/products', (req, res) => {
    res.send(data);
});

app.get('/products/:id', (req, res) => {
    const product = data.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});

app.get('/products/name/:name', (req, res) => {
    const products = data.filter(p => p.name.toLowerCase().includes(req.params.name.toLowerCase()));
    res.send(products);
});

app.post('/addproduct', (req, res) => {
    const product = {
        id: data.length + 1,
        name: req.body.name,
        total_quantity: req.body.total_quantity,
        type_of_product: req.body.type_of_product,
        price: req.body.price
    };
    data.push(product);
    res.send(product);
});

app.listen(3000, () => console.log('Server started on port 3000'));
