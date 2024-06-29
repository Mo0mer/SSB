document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
    const returnHomeBtn = document.getElementById('returnHomeBtn');
    const deleteAccountBtn = document.getElementById('deleteAccountBtn');
    const detailsSection = document.getElementById('detailsSection');
    const editSection = document.getElementById('editSection');
    const statusMessage = document.getElementById('statusMessage');

    toggleDetailsBtn.addEventListener('click', function() {
        if (detailsSection.style.display === 'none') {
            detailsSection.style.display = 'block';
            editSection.style.display = 'none';
        } else {
            detailsSection.style.display = 'none';
        }
    });

    returnHomeBtn.addEventListener('click', function() {
        window.location.href = 'Home.html';
    });

    deleteAccountBtn.addEventListener('click', function() {
        if (confirm('Вы уверены, что хотите удалить аккаунт?')) {
            window.location.href = 'Home.html'
        }
    });

    avatar.addEventListener('click', function() {
        editSection.innerHTML = `
            <h3>Изменить профиль</h3>
            <label class="avatar-input">Имя пользователя: <input type="text" id="newUsername"></label><br>
            <label class="avatar-input">Пол: <input type="text" id="newGender"></label><br>
            <label class="avatar-input">Возраст: <input type="number" id="newAge"></label><br>
            <button id="saveProfileBtn">Сохранить</button>
        `;
        editSection.style.display = 'block';

        document.getElementById('saveProfileBtn').addEventListener('click', function() {
            const newUsername = document.getElementById('newUsername').value;
            const newGender = document.getElementById('newGender').value;
            const newAge = document.getElementById('newAge').value;

            if (newUsername) document.getElementById('username').textContent = newUsername;
            if (newGender) document.getElementById('gender').textContent = newGender;
            if (newAge) document.getElementById('age').textContent = newAge;

            editSection.style.display = 'none';
        });
    });

    const fieldNames = {
        username: 'имя пользователя',
        gender: 'пол',
        age: 'возраст',
        email: 'почту',
        phone: 'телефон',
        address: 'адрес',
        password: 'пароль'
    };

    document.querySelectorAll('.editBtn').forEach(button => {
        button.addEventListener('click', function() {
            const field = button.getAttribute('data-field');
            const fieldLabel = fieldNames[field];
            const inputType = field === 'password' ? 'password' : 'text';

            editSection.innerHTML = `
                <h3>Изменить ${fieldLabel}</h3>
                <input type="${inputType}" id="new${capitalizeFirstLetter(field)}"><br>
                <button id="save${capitalizeFirstLetter(field)}Btn">Сохранить</button>
            `;
            editSection.style.display = 'block';

            document.getElementById(`save${capitalizeFirstLetter(field)}Btn`).addEventListener('click', function() {
                const newValue = document.getElementById(`new${capitalizeFirstLetter(field)}`).value;
                if (newValue) {
                    document.getElementById(field).textContent = newValue;
                    editSection.style.display = 'none';
                    showSuccess(`${fieldLabel} успешно обновлен!`);
                } else {
                    showError('Пожалуйста, введите новое значение.');
                }
            });
        });
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
