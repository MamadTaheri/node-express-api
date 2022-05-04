const express = require('express');
const app = express();
app.use(express.json());

// data
const Staff = require('./dev-team/Staff');

// CORS Handler Middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// Routes
app.get("/", (req, res) => {
    res.status(200).send('server is up...');
})

app.get('/staff', (req, res) => {
    console.log("request handling on progress....");
    res.json(Staff);
    console.log("successfully responded...");
});

app.get('/staff/:id', (req, res) => {
    const { id } = req.params;
    console.log("request handling on progress....");
    res.json(Staff.find(q => q.id == id));
    console.log("successfully responded...");
});

app.listen(3333, () => {
    console.log('Server Started...');
    console.log('Server is listening on port 3333...');
});