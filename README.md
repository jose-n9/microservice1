Micro-Serivce Instrucitons:

   Micro-Serivce Instrucitons:
    Implementation:
        First, implement the SQL for the login page.
        Second, review and fix any issues on the HTML page, including the project description.
        Third, update the database and password in the microservice.js file and fix all the places where the table would be accessed.
        Fourth, install the required packages: body-parser, express, and mysql2.
            npm install body-parser express mysql2 
        Fifth, go to the login.js file and update the filenames to open upon clicking the LOGIN and REGISTER buttons.

    Microservice flow:
       Once you load the HTML, the server will send back the server's status before loading the page. Additionally, the server will check the connection to the database, with the         
        database sending its initial response back to the server. The user will then proceed to login/register and send a request to the server. 
            Both http requests for login and register pages are POST. Using the urls '/login' and '/register', we will first fetch the values for username and password from the front end/
            client side. After that the server will parse incoming request from client side and then we we will use our specific querys for each page to. for '/login' it is SELECT and
            '/register' is INSERT. Then the server will send a request to the database to verify/insert the username and password.

            Example:    
                Client Side:
                    fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: username, password:password })
                    })
                        This will get username and password from text inputs from html. 

                Server Side:
                    app.post('/login', (req, res) => {
                        const username = req.body.username;
                        const password = req.body.password;
                        QUERY....
                    })
                        This will parse the incoming request from client side and use the values username and password in our mysql query
        The database will send a response regarding the provided information, and the server will then respond to the           
        user, allowing them to login/register. 

   ![uml](/Users/josenavarro/Desktop/Personal Projects/Budget App/microservice/uml.png)
