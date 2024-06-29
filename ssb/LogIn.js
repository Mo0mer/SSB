function check_date() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    if (email === 'test@example.com' && password === 'password') {
        showMessage('success', 'Вы успешно вошли в аккаунт.');
        window.location.href = "Account.html";
    } else {
        showMessage('error', 'Неправильный email или пароль. Попробуйте еще раз.');
    }
}

function showMessage(type, message) {
    event.preventDefault();
    let statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.className = 'message ' + type;
    statusMessage.style.display = 'block';

    setTimeout(function() {
        statusMessage.style.display = 'none';
    }, 3000);
}