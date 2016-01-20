# College Tester


## Installation

### Webpack
First Install Webpack with node
```sh
$ npm install webpack -g
```
Webpack grabs all of your files you put into it and exports it into one bundle .js file.

Webpack uses Nodejs' require. So to add another file just reference it like so
```
require( '.\/dirname/filename.js');
```
To export your new bundle file to bundle.js just run
```sh
$ webpack
```
This will export to to ./Public/js/bundle.js

Make sure to run it from the main directory where webpack.config.js is located.

You can also use webpack to minify with:
```sh
$ webpack -p
```
### SASS
First install SASS with Ruby

For Mac
```sh
$ sudo gem install sass
```
For Windows
[SASS installer](http://rubyinstaller.org/)

SASS compiles .sass files into css.
We can add sass files to our entry.sass files with @import 
```
@import reset
@import header
@import footer
```
Then we can compile the SASS in CSS with the command
```sh
$ sass ./public/sass/entry.sass ./public/css/style.css
```
Another cool trick is to set a terminal to watch for changes and update the CSS anytime any SASS does change
```sh
$ sass --watch ./public/sass/entry.sass:./public/css/style.css
```
This is exporting to ./Public/css
##### SASS Rules
SASS is dependant entirely on indentation so..

Keep SASS happy by using TAB(size = 2) not SPACES

SASS recognizes _filename.sass template files as filename.sass, so just add @import and you're good.
