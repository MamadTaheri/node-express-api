// const express = require("express");
// const app = express();
// const Post = require("./api/models/posts");
// const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
//     }
// })

// const getExt = (mimeType) => {
//     switch (mimeType){
//         case "image/png":
//             return ".png";
//         case "image/jpeg":
//             return ".jpeg";
//     }
// }

// const upload = multer({storage: storage});
// const postsData = new Post();

// app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
// });

// app.use("/uploads", express.static('uploads'))

// app.get("/", (req, res) => {
//     res.status(200).send('server is up');
// })

// app.get("/api/posts", (req, res) => {
    
//     res.status(200).send(postsData.get());
// })

// app.get("/api/posts/:post_id", (req, res) => {
//     const postId = req.params.post_id;
//     const foundPost = postsData.getIndividualBlog(postId);
//     if(foundPost) {
//         res.status(200).send(foundPost);
//     } else {
//         res.status(404).send("not found");
//     }
// })

// app.post("/api/posts",upload.single("post-image"), (req, res) => {
//     console.log(req.body);
//     console.log(req.file);
//     const newpost = {
//         "id": `${Date.now()}`,
//         "title": req.body.title,
//         "content": req.body.content,
//         "post_image": `uploads/${req.file.filename}`,
//         "added_date": `${Date.now()}`
//     }
//     postsData.add(newpost);
//     res.status(201).send("ok");
// })

// app.listen(3333, () => console.log("Listening on localhost:3333"))

// ****************** React Design Patterns*****************************************

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
    res.json(currentUser);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    res.json(users.find(q => q.id === id));
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;

    res.json(products.find(q => q.id == id));
});

app.listen(3333, () => {
    console.log('Server is listening on port 3333');
});