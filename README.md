# Feed Reader Testing

This application consists in four different feeds:
- Udacity Blog
- CSS Tricks
- HTML5 Rocks
- Linear Digressions

Each one of them leads to ten links about the subject
of the feed.


To run this, you need to clone or download the repository
and open the index.html in the browser. The Jasmine will
check if the 7 specs passes:

- A test suit called "Initial Entries":
 * A spec to ensure that there is an element in the feed container

- A test suit called "New Feed Selection":
  * A spec to ensure that two tests are not equal

- A test suit called "The Menu":
  * A spec to ensure that the menu element is hidden by default
  * A spec to ensure that the menu changes visibility when clicked

- A test suit called "RSS Feeds":
  * A spec to ensure that allFeeds variable exists, it's defined and not empty
  * A spec to ensure that the name of the feed exists, it's defined and not empty
  * A spec to ensure that the url of the feed exists, it's defined and not empty

The file named feedreader.js is where the specs are
detailed and explained deeper.

-- The version used for Jasmine framework is 3.3.0
