const controller = require("./tweet.controller.js");
var cors = require("cors") 
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors())
app.post("/", function (req, res) {
  const tweet = controller.addTweet(req.body);
  res.status(201).send(tweet);
});

app.put("/:id", function (req, res) {
  editedTweet = controller.editTweet(req.params.id, req.body);
  res.status(200).send(`Tweet editado ${editedTweet}`);
});

app.delete("/:id", function (req, res) {
  controller.removeTweet(req.params.id);
  res.status(204);
});

app.get("/:id", function (req, res) {
  const tweetById = controller.getTweet(req.params.id);
  res.send(tweetById);
});

app.get("/", function (req, res) {
  res.send(controller.getAllTweets());
});

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
