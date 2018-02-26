git@github.com:leozino/block_twitter_trolls.git

Simple application to block unwanted trolls on twitter.

Install node.js

and run with:

node block_bot.js

you can edit the variable NUM_HISTORY to set the number of followers to look back on.

Application gets the last NUM_HISTORY number of followers, checks to see if they still have the default image in their profile, checks to see if they have less than 2 tweets, and if so alerts and blocks the user.

There is a small delay to not spam the twitter API.

note: you must enter your own twitter key information
