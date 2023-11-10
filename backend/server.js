const express = require('express')
const app = express()
const port = 4000

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/books', (req, res) => {
    res.send("Data Recieved")
});


// Setting up a route to handle GET requests to '/'
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

// Setting up a dynamic route to handle GET requests to '/hello/:name'
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name)
    res.send('hello' + req.params.name);
})

// Dirname gets current directory
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Define a GET route on the path '/name'
// Retrieve 'fname' from query parameters and 'lname' from route parameters
app.get('/name', (req, res) => {
    res.sendFile('Hello ' + req.query.fname + " " + req.params.lname);
})

// Retrieve 'fname' and 'lname' from the body of the POST request
// Sending a response combining a string with the first name and last name
app.post('/name', (req, res) => {
    res.send('Hello Post' + req.body.fname + " " + req.body.lname);
})

// Setting up a route to handle GET requests to '/api/books'
app.get('/api/books', (req, res) => {
    // Defining a data object containing an array of books, each with various properties
    const data = {
        "books": [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]
    }
    // Sending a JSON response with a 200 HTTP status code
    res.status(200).json({
        myBooks: data,
        "message": "Hello from the server"
    });
})


// Starting the server and listening for connections on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})