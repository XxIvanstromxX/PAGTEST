// Navegation Bar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-button').addEventListener('click', function () {
        var navMenu = document.getElementById('navbar-sticky');
        navMenu.classList.toggle('hidden');
    });
});

// Silder con Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // Tiempo en milisegundos entre cada slide
        disableOnInteraction: false, // Permite que el autoplay continúe después de la interacción del usuario
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// FORMULARIO
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const numberphone = form.numberphone.value.trim();

        if (username === '' || email === '' || numberphone === '') {
            showMessage('Todos los campos son obligatorios.', 'red');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Por favor, ingrese un correo electrónico válido.', 'red');
            return;
        }

        showMessage('Registro exitoso.', 'green');
        form.reset();
    });

    function showMessage(message, color) {
        messageDiv.textContent = message;
        messageDiv.className = `text-${color}-600`;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});