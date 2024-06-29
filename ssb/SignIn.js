function success_reg() {
    let usernameInput = document.getElementById('regUsername');
    let emailInput = document.getElementById('regEmail');
    let passwordInput = document.getElementById('regPassword');

    let username = usernameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (!isValidUsername(username)) {
        showError('Имя пользователя должно содержать только буквы и цифры, длиной от 3 до 20 символов.');
        return;
    }

    if (!isValidEmail(email)) {
        showError('Пожалуйста, введите корректный email.');
        return;
    }

    if (!isValidPassword(password)) {
        showError('Пароль должен содержать минимум 8 символов, включая хотя бы одну цифру и одну букву.');
        return;
    }

    showSuccess('Регистрация выполнена успешно!');
    window.location.href = 'Account.html';
}

function isValidUsername(username) {
    var usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    return usernameRegex.test(username);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    return passwordRegex.test(password);
}

function showError(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.className = 'message error';
    statusMessage.style.display = 'block';

    setTimeout(function() {
        statusMessage.style.display = 'none';
    }, 5000);
}

function showSuccess(message) {
    var statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.className = 'message success';
    statusMessage.style.display = 'block';
}

    