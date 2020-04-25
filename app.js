const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

let posts = []

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { posts: posts })
});

app.get("/info", (req, res) => {
    res.render("info");
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", (req, res) => {
    const post = {
        postLink: req.body.postLink
    }
    posts.push(post);
    res.redirect("/");
});

app.get("/:postId", (req, res) => {
    console.log(req.params.postId);
    const newUrl = req.params.postId;
    res.render("/:postId");
});

app.listen(3000, () => {
    console.log("Server is running successfully")
})