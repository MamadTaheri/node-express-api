const PATH = "./data.json";
const fs = require("fs");

class Post {

    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividualBlog(postId){
        /** get One Blog post */
        const posts = this.readData();
        const foundPost = posts.find(q => q.id == postId);
        return foundPost;
    }

    add(newPost){
        /** Add new Post */
        const currentposts= this.readData();
        currentposts.unshift(newPost);
        this.storeData(currentposts);
    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts
    }

    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }

}

module.exports = Post;