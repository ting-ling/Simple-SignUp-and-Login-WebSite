const passwordField = document.getElementById("password");
const showPasswordToggle = document.getElementById("showPasswordToggle");

showPasswordToggle.addEventListener("change", function () {
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});


document.getElementById('SignUpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phoneNo: document.getElementById('phoneNo').value,
        password: document.getElementById('password').value
    };

    fetch('http://localhost:5296/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(async response => {
            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }
            return response.text();
        })
        .then(result => {
            alert('Success: ' + result);
            window.location.href = 'index.html';
        })
        .catch(err => {
            alert('Error: ' + err.message);
        });
});