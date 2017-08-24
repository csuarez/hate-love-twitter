/**
 * Hides an DOM element
 * @param {Element} element
 */
var hideElement = function(element) {
  element.classList.add('hated');
}

/**
 * Given a DOM element which represent a tweet, indicates if it is a like
 * @param {Element} tweet
 */
var isLike = function(tweet) {
  var result = Array.from(tweet.getElementsByClassName('Icon--heartBadge'));
  return result.length !== 0;
}

/**
 * Given a DOM element indicates if it is a tweet.
 * @param {Element} element
 */
var isTweet = function(element) {
  return element.classList && element.classList.contains('js-stream-item');
}

/**
 * Given an array of elements, hide the likes
 * @param {NodeList} elements
 */
var hideLikes = function (elements) {
  return Array.from(elements).filter(isLike).forEach(hideElement);
}

// Initial processing
var firstTweets = document.getElementsByClassName('js-stream-item');
hideLikes(firstTweets);

// Get the tweet stream
var target = document.querySelector('.stream-container');

// Create an observer
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var nodes = Array.from(mutation.addedNodes);
    var tweets = nodes.filter(isTweet);
    hideLikes(tweets);
  });
});

var config = {
  childList: true,
  subtree: true
};

// Start the observer
observer.observe(target, config);