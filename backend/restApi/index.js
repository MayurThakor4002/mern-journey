const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));

let posts = [
  {
    id: uuidv4(),
    username: "mayur",
    content: "self growther",
  },
  {
    id: uuidv4(),
    username: "john",
    content: "i love coding",
  },
  {
    id: uuidv4(),
    username: "jane",
    content: "i'm learning new things",
  },
];

app.get("/posts", (req, res) => {
  // res.send("Welcome to the this website");
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  console.log(req.body);
  let id = uuidv4(); // Generate unique id for each post
  let { username, content } = req.body;
  posts.push({ id, username, content });
  console.log(posts);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  // console.log(posts); // Check if posts is an array
  console.log(id); // Check if id matches any post
  let post = posts.find((p) => p.id === id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  console.log(newContent);
  console.log(id); // Check if id matches any post
  let post = posts.find((p) => p.id === id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
  // res.send("patch request");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((p) => p.id === id);
  console.log(post);
  res.render("edits.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
  // res.send("delete request");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.patch("/posts/:id", (req, res) => {
//   console.log(posts)
//   let { id } = req.params;
//   let newContent = req.body.content;
//   console.log(newContent);
//   console.log(id);
//   res.send("Update page");
// });

// app.get("/posts/edit", (req, res) => {
//   // let id = req.params.id;
//   // let post = posts.find((p) => p.id === id);
//   // res.render("edit.ejs", {post});
//   res.send("Edit page");
// });
