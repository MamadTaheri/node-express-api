const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", (req, res) => {
    res.status(200).send('server is up');
})

let currentUser = {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
};

let users = [{
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
},{
    id: '234',
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
}, {
    id: '345',
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
    id: 0,
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
}, {
    id: 1,
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
}, {
    id: 2,
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
}]

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