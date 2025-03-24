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

// Создание падающих гифок
function createFallingGif() {
    const gifs = [
        'https://media.tenor.com/QfRLzeM1gT4AAAAi/myaowl-heart.gif',
        'https://media.tenor.com/dTkq2FK0nMcAAAAj/heart-love.gif',
        'https://media.tenor.com/0we4VfL-cvoAAAAj/myaowl-love.gif'
    ];
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    const gifElement = document.createElement('img');
    gifElement.src = randomGif;
    gifElement.style.position = 'absolute';
    gifElement.style.left = `${Math.random() * 100}%`; // Случайная позиция по горизонтали
    gifElement.style.top = '-50px'; // Начинаем сверху
    gifElement.style.animation = `fall ${Math.random() * 5 + 3}s ease-in-out forwards`;
    gifElement.style.width = '50px'; // Размер гифки
    gifElement.style.height = 'auto';

    document.querySelector('.kitty-container').appendChild(gifElement);

    setTimeout(() => {
        gifElement.remove();
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
        // Добавляем класс для анимации исчезновения
        startScreen.classList.add('fade-out');

        // После завершения анимации скрываем начальный экран и показываем основной контент
        setTimeout(() => {
            startScreen.style.display = 'none'; // Скрываем начальный экран
            mainContent.style.display = 'block'; // Показываем основной контент
        }, 1000); // Время анимации (1 секунда)
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

// Загрузка сохраненного значения счетчика из localStorage
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0; // Получаем значение из localStorage
document.getElementById('counterValue').textContent = clickCount; // Устанавливаем начальное значение

// Логика для кнопки "Нажми меня!"
document.getElementById('loveButton').addEventListener('click', () => {
    clickCount++; // Увеличиваем счетчик
    document.getElementById('counterValue').textContent = clickCount; // Обновляем текст счетчика

    // Сохраняем значение в localStorage
    localStorage.setItem('clickCount', clickCount);

    for (let i = 0; i < 3; i++) {
        createFallingGif();
    }

    // Запуск салюта каждые 100 нажатий
    if (clickCount % 100 === 0) {
        launchFireworks();
        const audio = document.getElementById('explosionSound');
        audio.volume = 0.3; // Устанавливаем громкость на 30%
        audio.play(); // Воспроизводим звук салюта
    }
});

// Анимация падающих гифок
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

// Запуск салюта
function launchFireworks() {
    const fireworksContainer = document.querySelector('.fireworks-container');

    // Создаем несколько взрывающихся элементов
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 50 + 20}%`;
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`;

        // Добавляем случайный цвет
        const colors = ['#ff6b6b', '#ff4d4d', '#ffa500', '#ffff00', '#00ffff', '#0000ff', '#8a2be2'];
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.boxShadow = `0 0 10px ${firework.style.backgroundColor}, 0 0 20px ${firework.style.backgroundColor}`;

        fireworksContainer.appendChild(firework);

        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            firework.remove();
        }, 3000);
    }
}
