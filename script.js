// script.js

// Функция для расчета времени, прошедшего с начала отношений
function calculateTimePassed() {
    const startDate = new Date('2021-03-24T00:00:00+03:00'); // Начало отношений (МСК)
    const currentDate = new Date(); // Текущая дата
    const timeDifference = currentDate - startDate; // Разница в миллисекундах

    // Переводим разницу в дни, часы, минуты и секунды
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновляем текст в элементе #timePassed
    document.getElementById('timePassed').innerHTML = `
        <strong>${days}</strong> дней, 
        <strong>${hours}</strong> часов, 
        <strong>${minutes}</strong> минут и 
        <strong>${seconds}</strong> секунд.
    `;
}

// Обновляем счетчик каждую секунду
setInterval(calculateTimePassed, 1000);

// Инициализация счетчика при загрузке страницы
calculateTimePassed();

// Создание сердечек
function createHeart() {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    heart.style.color = '#ff6b6b'; // Розовый цвет
    heart.style.fontSize = `${Math.random() * 5 + 1}rem`; // Размер сердечка
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}%`; // Случайная позиция по горизонтали
    heart.style.top = '-50px'; // Начинаем сверху
    heart.style.animation = `fall ${Math.random() * 5 + 3}s ease-in-out forwards`;

    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Логика для кнопки "Я тебя люблю :з"
let heartCount = 1; // Количество сердечек при каждом нажатии
document.getElementById('loveButton').addEventListener('click', () => {
    for (let i = 0; i < heartCount; i++) {
        createHeart();
    }
    heartCount++; // Увеличиваем количество сердечек
});

const heartAnimation = `
    @keyframes fall {
        0% { transform: translateY(-50px); }
        100% { transform: translateY(calc(100vh + 50px)); opacity: 0; }
    }
`;
document.head.appendChild(document.createElement('style')).textContent = heartAnimation;