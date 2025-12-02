document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const productItems = productsGrid.querySelectorAll('.product-item');

    // Calculează numărul de elemente vizibile în carusel la un moment dat
    // Acest lucru ar trebui să fie adaptabil la dimensiunea ecranului,
    // dar pentru simplitate, vom începe cu o valoare fixă.
    // Mai târziu, poți adăuga logica pentru a determina dinamic.
    const itemsPerView = 4; // Presupunem că 4 produse sunt vizibile simultan pe un ecran larg
    let currentIndex = 0;

    // Funcția pentru a actualiza vizibilitatea butoanelor (prev/next)
    function updateButtonVisibility() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= productItems.length - itemsPerView;
    }

    // Funcția pentru a deplasa caruselul
    function moveCarousel(direction) {
        if (direction === 'next') {
            if (currentIndex < productItems.length - itemsPerView) {
                currentIndex++;
            }
        } else if (direction === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
        
        // Calculează distanța de translație
        // Aceasta depinde de lățimea unui element + gap
        const itemWidth = productItems[0].offsetWidth; // Lățimea unui produs
        const gap = 30; // Spațiul dintre produse, conform CSS-ului
        const translationValue = currentIndex * (itemWidth + gap);
        
        productsGrid.style.transform = `translateX(-${translationValue}px)`;
        updateButtonVisibility();
    }

    // Adaugă event listeners pentru butoane
    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));

    // Inițializează vizibilitatea butoanelor la încărcarea paginii
    updateButtonVisibility();

    window.addEventListener('resize', () => {
        updateButtonVisibility();
    });
});