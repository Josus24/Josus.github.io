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

// Создание гифки с котиком
function createKittyGif() {
    const kitty = document.createElement('img');
    kitty.src = 'https://media.tenor.com/QfRLzeM1gT4AAAAi/myaowl-heart.gif'; // Вставьте свою ссылку на гифку здесь
    kitty.style.position = 'absolute';
    kitty.style.left = `${Math.random() * 100}%`; // Случайная позиция по горизонтали
    kitty.style.top = '-50px'; // Начинаем сверху
    kitty.style.animation = `fall ${Math.random() * 5 + 3}s ease-in-out forwards`;
    kitty.style.width = '50px'; // Размер гифки
    kitty.style.height = 'auto';

    document.querySelector('.kitty-container').appendChild(kitty);

    setTimeout(() => {
        kitty.remove();
    }, 5000);
}

// Логика для начального экрана
document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('startScreen');
    const mainContent = document.getElementById('mainContent');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // При нажатии на "Да"
    yesButton.addEventListener('click', () => {
        startScreen.style.display = 'none'; // Скрываем начальный экран
        mainContent.style.display = 'block'; // Показываем основной контент
    });

    // При наведении на "Нет"
    noButton.addEventListener('mouseover', () => {
        // Перемещаем кнопку "Нет" в случайное место
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const randomX = Math.random() * (screenWidth - 100); // Минус ширина кнопки
        const randomY = Math.random() * (screenHeight - 100); // Минус высота кнопки

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});

// Логика для кнопки "Нажми меня!"
let kittyCount = 1; // Количество котиков при каждом нажатии
document.getElementById('loveButton').addEventListener('click', () => {
    for (let i = 0; i < kittyCount; i++) {
        createKittyGif();
    }
    kittyCount++; // Увеличиваем количество котиков
});

// Анимация падающих котиков
const kittyAnimation = `
    @keyframes fall {
        0% { transform: translateY(-50px); }
        100% { transform: translateY(calc(100vh + 50px)); opacity: 0; }
    }
`;
document.head.appendChild(document.createElement('style')).textContent = kittyAnimation;

// Мигание кнопки
setInterval(() => {
    const button = document.getElementById('loveButton');
    button.style.backgroundColor = button.style.backgroundColor === '#ff6b6b' ? '#ff4d4d' : '#ff6b6b';
}, 1000);