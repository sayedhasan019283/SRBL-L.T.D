document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    // condition for log in
    if (userEmail == 'sayedhasan@gmail.com' && userPassword == 'sayedhasan') {
        window.location.href = 'banking.html'
    }

    else {
        console.log('user error');
    }

});


