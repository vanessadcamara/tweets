const tweets = [];

const model = {
  id_tweet: "",
  date: "",
  content: "",
};

// adição, edição, remoção, busca de um tweet, busca de todos os tweets

function addTweet(tweet) {
  tweets.push(tweet);
  return tweet;
}

function editTweet(id_tweet, newContent) {
  tweets[id_tweet].content = newContent;
}

function removeTweet(id_tweet) {
  tweets.splice(id_tweet, 1);
}

function getTweet(id_tweet) {
  return tweets[id_tweet];
}

function getAllTweets() {
  return tweets;
}

module.exports = {
  addTweet,
  editTweet,
  removeTweet,
  getTweet,
  getAllTweets,
};
