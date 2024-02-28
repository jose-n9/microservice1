
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //to parse json
app.use(bodyParser.json());
var mysql = require("mysql2");
app.use(express.static('public')); //I had all my html and css in public

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
  });


  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //CHANGE DATABASE and column names
    pool.query('SELECT username, password FROM login WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            console.error('Error executing login query:', err);
            res.status(500).send('Error executing login query');
            return;
        }

        if (results.length > 0) {
            // If there are matching records, login is successful
            console.log('Login successful');
            res.sendStatus(200);
        } else {
            // If no matching records, login failed
            console.log('Invalid username or password');
            res.sendStatus(401);
        }
    });
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Execute the registration query
    pool.query('INSERT INTO login (username, password) VALUES (?, ?)', [username, password], (err, results) => {
        if (err) {
            console.error('Error executing registration query:', err);
            res.status(500).send('Error executing registration query');
            return;
        }

        // Check if registration was successful
        if (results.affectedRows > 0) {
            console.log('Registration successful');
            res.sendStatus(200);
        } else {
            console.log('Registration failed');
            res.sendStatus(500);
        }
    });
});
  

  
    
       