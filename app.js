const express = require('express');
const app = express();
app.use(express.json());

// data
const currentUser = require('./data/currentUser');
const users = require('./data/users');
const products = require('./data/products');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", (req, res) => {
    res.status(200).send('server is up');
})

app.get('/current-user', (req, res) => {
    console.log("request handling on progress....");
    res.json(currentUser);
    console.log("successfully responded...");
});

app.get('/users', (req, res) => {
    console.log("request handling on progress....");
    res.json(users);
    console.log("successfully responded...");
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    console.log(`requests user with id : ${id}  `);

    res.json(users.find(q => q.id === id));
    console.log("successfully responded...");
});

app.get('/products', (req, res) => {
    console.log("request handling on progress....");
    res.json(products);
    console.log("successfully responded...");
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    console.log(`requests product with id : ${id}  `);

    res.json(products.find(q => q.id == id));
    console.log("successfully responded...");
});

app.listen(3333, () => {
    console.log('Server Started');
    console.log('Server is listening on port 3333');
});