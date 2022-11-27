const controller = require("./tweet.controller.js");

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

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
  const tweets = controller.getAllTweets();
  res.send(`tweets: ${tweets}`);
});

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
