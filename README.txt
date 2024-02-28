
Micro-Serivce Instrucitons:

   Micro-Serivce Instrucitons:
    Implementation:
        First, I would implement the SQL for the login page.
        Second, I would review and fix any issues on the HTML page, including the project description.
        Third, I would update the database and password in the microservice.js file and fix all the places where the table would be accessed.
        Fourth, I would install the required packages: body-parser, express, and mysql2.
            npm install body-parser express mysql2 
        Fifth, I would go to the login.js file and update the filenames to open upon clicking the LOGIN and REGISTER buttons.

    Microservice flow:
       Once you load the HTML, the server will send back the server's status before loading the page. Additionally, the server will check the connection to the database, with the         
        database sending its initial response back to the server. The user will then proceed to login/register and send a request to the server, which will, in turn, send a request          
        to the database to verify if the username and password match. The database will send a response regarding the provided information, and the server will then respond to the           
        user, allowing them to login. To logout, the user will send a request to the server, which will execute the logout process and shut down the page.