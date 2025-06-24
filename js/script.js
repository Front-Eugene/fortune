document.addEventListener('DOMContentLoaded', function () {
    const spinButton = document.querySelector('.js-spin_button');
    const wheel = document.querySelector('.js-wheel');

    let isSpinning = false;
    let toggle = false;

    spinButton.addEventListener('click', function () {
        if (isSpinning) return; // Защита от повторного клика

        isSpinning = true;
        // Снимаем предыдущие классы анимации, если есть
        wheel.classList.remove('rotate1', 'rotate2');

        // Смена типа анимации для разнообразия (можно всегда rotate1)
        const animationClass = toggle ? 'rotate2' : 'rotate1';
        toggle = !toggle;

        // Запускаем анимацию
        wheel.classList.add(animationClass);

        // Ожидаем завершения анимации (5 секунд)
        setTimeout(() => {
            wheel.classList.remove(animationClass);
            isSpinning = false;
        }, 5000);
    });

    const countSpan = document.querySelector('.js-count');
    let count = parseInt(countSpan.textContent, 10);

    spinButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            countSpan.textContent = count;
            if (count === 0) {
                setTimeout(() => {
                // Здесь вставьте ссылку для редиректа:
                window.location.href = 'https://example.com'; // <-- ВСТАВЬТЕ СВОЮ ССЫЛКУ СЮДА
                }, 4000);
            }
        }
    });
});
