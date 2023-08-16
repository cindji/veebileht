// Functions to toggle between login and register forms
function toggleAuth(showForm, hideForm) {
    document.getElementById(showForm).style.display = 'block';
    document.getElementById(hideForm).style.display = 'none';
}

function login() {
    const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())  // Ensure this line is present
    .then(data => {
        document.getElementById('message').textContent = data.message;
    });
}



function register() {
    const data = {
        username: document.getElementById('regUsername').value,
        password: document.getElementById('regPassword').value
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => {
        document.getElementById('message').textContent = message;
    });
}
