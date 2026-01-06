const renderEasters = () => {
    let isScrolledEnd = false;
    let isEasterSwown = false;

    const handleScroll = () => {
        if (isEasterSwown) return;

        if (!isScrolledEnd) {
            isScrolledEnd = document.body.scrollHeight === Math.ceil(window.scrollY + window.innerHeight);
            return;
        }

        const easterElement = document.createElement('div');
        easterElement.className = 'easter';
        easterElement.textContent = 'Всё, дальше некуда, пора собираться на свадьбу!';
        document.body.appendChild(easterElement);
        isEasterSwown = true;
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleScroll);
};

document.addEventListener('DOMContentLoaded', renderEasters);
