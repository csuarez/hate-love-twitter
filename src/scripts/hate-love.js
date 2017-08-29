/**
 * Hides an DOM element
 * @param {Element} element
 */
const hideElement = (element) => element.classList.add('hated');

/**
 * Given a DOM element which represent a tweet, indicates if it is a like
 * @param {Element} tweet
 */
const isLike = (tweet) => {
  var result = Array.from(tweet.getElementsByClassName('Icon--heartBadge'));
  return result.length !== 0;
};

/**
 * Given a DOM element indicates if has a CSS class
 * @param {Element} element
 * @param {String} cssClass
 */
const hasClass = (element, cssClass) => element.classList && element.classList.contains(cssClass);

/**
 * Given a DOM element indicates if it is a tweet.
 * @param {Element} element
 */
const isTweet = (element) => hasClass(element, 'js-stream-item');

/**
 * Given an array of elements, hide the likes
 * @param {NodeList} elements
 */
const hideLikes =  (elements) => Array.from(elements).filter(isLike).forEach(hideElement);

/**
 * Given an array of elements, hide the likes
 * @param {NodeList} elements
 */
const hideFirstLikes =  () => {
  const firstTweets = document.getElementsByClassName('js-stream-item');
  hideLikes(firstTweets);
};

// Get bodyElement
const bodyElement = document.querySelector('body');

// MutationObserver config
const config = {
  childList: true,
  subtree: true
};

// Create an observer to watch tweets in the stream
const tweetObserver = new MutationObserver((mutations) => {
  firstTweetObserver.disconnect();
  mutations.forEach((mutation) => {
    const nodes = Array.from(mutation.addedNodes);
    const tweets = nodes.filter(isTweet);
    hideLikes(tweets);
  });
});

// Create an observer to watch the first tweet at the body
const firstTweetObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const nodes = Array.from(mutation.addedNodes);
    const tweets = nodes.filter(isTweet);
    if (tweets.length > 0) {
      hideFirstLikes();
      const tweetStream = document.getElementsByClassName('stream');
      if (tweetStream.length > 0){
        tweetObserver.observe(tweetStream[0], config);
      }

    }
  });
});



// Start the observer
firstTweetObserver.observe(bodyElement, config);
