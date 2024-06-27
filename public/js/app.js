const carrosselSlide = document.querySelector('.carrossel-slide');
const carrosselImages = document.querySelectorAll('.carrossel-slide img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarrossel() {
    carrosselImages.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carrosselImages.length - 1;
    }
    updateCarrossel();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= carrosselImages.length) {
        currentIndex = 0;
    }
    updateCarrossel();
});

updateCarrossel();