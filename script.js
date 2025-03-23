// script.js

// Анимация падающих сердечек
function createHeart() {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    heart.style.color = '#e7dada'; // Очень светлый розовый
    heart.style.fontSize = `${Math.random() * 5 + 1}rem`; // Меньше размер
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = '-50px';
    heart.style.animation = `fall ${Math.random() * 5 + 3}s ease-in-out forwards`;

    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000); // Меньше сердечек

const heartAnimation = `
    @keyframes fall {
        0% { transform: translateY(-50px); }
        100% { transform: translateY(calc(100vh + 50px)); opacity: 0; }
    }
`;
document.head.appendChild(document.createElement('style')).textContent = heartAnimation;

// Интерактивность кнопки "Спасибо"
document.getElementById('thankButton').addEventListener('click', () => {
    document.getElementById('hiddenMessage').style.display = 'block';
});
