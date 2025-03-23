// script.js

// Анимация падающих сердечек
function createHeart() {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    heart.style.color = getRandomColor();
    heart.style.fontSize = `${Math.random() * 10 + 5}rem`;
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = '-50px';
    heart.style.animation = `fall ${Math.random() * 3 + 1}s ease-in-out forwards`;

    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#ff5252', '#e57373', '#ef9a9a', '#f44336'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createHeart, 500);

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
