# my-organizer-app-MEAN

MyOrganizer APP using the MEAN stack

**Author: Jeanie Herold 

***Code Louisville Final Project
***Full Stack JavaScript Course

**Date: 11/9/2016

## Set Up
```
# clone the repo
git clone <this-repo>
cd <this-repo>

# install node dependencies
npm install

# view the app
# Note: to develop, see instructions below
node src
```

## Developing
```
# make sure you have some popular node tools installed
npm install -g nodemon
npm install -g node-inspector

# have nodemon run the app in one terminal tab
# nodemon will watch for file changes in the express app
# and restart the server
nodemon --debug src

# run the debugger in another terminal
# node-inspector will break the application when a break point
# or `debugger` statement is reached in the JavaScript
node-inspector
```
