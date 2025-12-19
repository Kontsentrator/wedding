const renderEasters = () => {
    let isScrolledEnd = false;
    let isEasterSwown = false;

    window.addEventListener('scroll', () => {
        if (isEasterSwown) return;

        if (!isScrolledEnd) {
            isScrolledEnd = document.body.scrollHeight === window.scrollY + window.innerHeight;
            return;
        }

        const easterElement = document.createElement('div');
        easterElement.className = 'easter';
        easterElement.textContent = 'Всё, дальше некуда, пора собираться на свадьбу!';
        document.body.appendChild(easterElement);
        isEasterSwown = true;
    });
};

document.addEventListener('DOMContentLoaded', renderEasters);
