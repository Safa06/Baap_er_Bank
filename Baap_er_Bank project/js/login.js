document.getElementById('btn-submit').addEventListener('click',function(){
    // Email check

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //Password check

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'baper@bank.com' && password ==='secret')
    {
        window.location.href = 'bank_inside.html';
    }

    else
    {
        alert('Invalid Users !');
    }




})