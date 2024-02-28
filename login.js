

function Login () {
    var     username = document.getElementById('username').value
    var     password = document.getElementById('password').value
   
    fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password:password })
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = '/main.html' //change tto whatever html
        }
        else {
                alert('Invalid username or password');
            }
           
    })
    .catch(error => {
        console.error('Error logging in:', error);
    });
};


function  RegisterClick () {
    window.location.href = '/register.html'
}

function  Register () {
    var     username = document.getElementById('username').value
    var     password = document.getElementById('password').value
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password:password })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/index.html'
            }
            else {
                if (response.status === 500) {
                    alert('Server error. Please try again later.');
                }
                else {
                    alert('Error Registering with username and password');
                }
               
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
}

