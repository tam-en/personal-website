// import express
var express = require('express');
var app = express(); // your app is an instance of express

// create a home route
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/views/index.html');
});

// about page route
app.get('/about', function(req, res) {
	res.sendFile(__dirname+'/views/about.html');
});

// blog-directory route
app.get('/blog-directory', function(req, res) {
	res.sendFile(__dirname+'/views/blog-directory.html');
});

// tell express which port to listen to
app.listen(8000);
