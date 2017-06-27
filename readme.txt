=== Steemit Feed ===
Contributors: minitekgr
Tags: Steemit, Steemit feed, Steemit posts, Steemit articles, Steemit widget
Requires at least: 4.6
Tested up to: 4.8
Stable tag: 1.0.3
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

A simple Wordpress plugin that displays a feed of your Steemit posts.

== Description ==

Display Steemit posts from any Steemit username.

== Installation ==

1. Install the Steemit Feed plugin either via the WordPress plugin directory, or by uploading the files to your web server (in the `/wp-content/plugins/` directory).
2. Activate the Steemit Feed plugin through the 'Plugins' menu in WordPress.
3. Navigate to the 'Steemit Feed' settings page and configure your settings.
4. Use the shortcode `[steemit-feed]` in your page, post or widget to display your Steemit posts.
5. You can display multiple Steemit feeds by using shortcode options, for example: `[steemit-feed username="wordpress-tips" postscount="5"]`

= Display your Feed =

**Single Steemit Feed**

Copy and paste the following shortcode directly into the page, post or widget where you'd like the Steemit feed to show up: `[steemit-feed]`

**Multiple Steemit Feeds**

If you'd like to display multiple Steemit feeds then you can set different settings directly in the shortcode like so: `[steemit-feed username="wordpress-tips" postscount="5"]`

You can display as many different Steemit feeds as you like by just using the shortcode options below. For example:
`[steemit-feed]`
`[steemit-feed username="another_username"]`
`[steemit-feed username="another_username" postscount="5" postimage="false" postreward="false"]`

See the table below for a full list of available shortcode options:

= Shortcode Options =
* **General Options**
* **username** - A Steemit Username - Example: `[steemit-feed username="wordpress-tips"]`
* **Post Options**
* **postscount** - Total posts in feed (integer) - Example: `[steemit-feed postscount="5"]`
* **postimage** - Show post image (true or false) - Example: `[steemit-feed postimage="true"]`
* **posttitle** - Show post title (true or false) - Example: `[steemit-feed posttitle="true"]`
* **postcontent** - Show post content (true or false) - Example: `[steemit-feed postcontent="false"]`
* **wordlimit** - Word limit for post content (integer) - Example: `[steemit-feed wordlimit="20"]`
* **postreward** - Show post reward (true or false) - Example: `[steemit-feed postreward="false"]`
* **postdate** - Sort post date (true or false) - Example: `[steemit-feed postdate="true"]`
* **postauthor** - Show post author (true or false) - Example: `[steemit-feed postauthor="false"]`
* **posttag** - Show post tag (true or false) - Example: `[steemit-feed posttag="true"]`
* **postvotes** - Show post votes (true or false) - Example: `[steemit-feed postvotes="false"]`
* **postreplies** - Show post replies (true or false) - Example: `[steemit-feed postreplies="true"]`

== Changelog ==

= 1.0.3 =
* Fixes the reward sum (displayed as $0.00 when payout has not started).
* Fixes the upvotes count.
* Changes the votes icon (user icon has been replaced by an arrow icon to match the Steemit layout).

= 1.0.2 =
* Updated to work with the latest Steem.js API.

= 1.0.1 =
* Launched the Steemit Feed plugin.
