const PATH = "./data.json";
const fs = require("fs");

class Post {

    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividualBlog(){
        /** get One Blog post */
    }

    add(){
        /** Add new Post */
    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts
    }

}

module.exports = Post;