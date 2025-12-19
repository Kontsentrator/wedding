console.log('А зачем ты сюда залез?');

/* --- ПРИГЛАШЕНИЕ --- */

const WEEK_DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const DAYS_IN_MONTH = 31;
const START_DAY_INDEX = 0;
const WEDDING_DATE = 7;

const renderCalendar = () => {
    const calendarContainer = document.getElementById('calendarContainer');
    if (!calendarContainer) return;

    const calendar = calendarContainer.querySelector('.calendar');
    if (!calendar) return;

    // Добавляем заголовки дней недели
    WEEK_DAYS.forEach((weekDay) => {
        const weekDayElement = document.createElement('div');
        weekDayElement.className = 'weekDay';
        weekDayElement.innerText = weekDay;
        calendar.appendChild(weekDayElement);
    });

    // 3. Добавляем числа месяца
    for (let day = 1; day <= DAYS_IN_MONTH; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = day;
        if (START_DAY_INDEX && day === 1) {
            dayElement.style.gridColumnStart = START_DAY_INDEX + 1;
        }

        if (day === WEDDING_DATE) {
            dayElement.classList.add('day_special');
        }

        calendar.appendChild(dayElement);
    }
};

/* --- ПРОГРАММА --- */

const PROGRAMM_EVENTS = [
    { time: '12:00-13:00', title: 'Торжественная церемония венчания', location: 'Спасо-Вознесенский кафедральный собор', address: 'Ульяновская ул., 2Б', href: 'https://yandex.ru/maps/-/CLwCfXJq', imageUrl: '../images/cafedral.webp' },
    { time: '15:00', title: 'Фотосессия', location: 'Ресторан «Роза Ветров»', address: 'посёлок Рыбацкий, 1 · набережная реки Волга', href: 'https://yandex.ru/maps/-/CLwCvY3K', imageUrl: '../images/photozone.webp' },
    { time: '16:00', title: 'Праздничный банкет', location: 'Ресторан «Роза Ветров»', address: 'посёлок Рыбацкий, 1 · набережная реки Волга', href: 'https://yandex.ru/maps/-/CLwCvY3K', imageUrl: '../images/sunset.webp' },
];

const renderProgrammEvents = () => {
    const programmSection = document.querySelector('.section.programm');
    if (!programmSection) return;

    const timeline = programmSection.querySelector('.timeline');
    if (!timeline) return;

    PROGRAMM_EVENTS.forEach((event) => {
        const eventElement = document.createElement('a');
        eventElement.href = event.href;
        eventElement.className = 'event';
        eventElement.setAttribute('target', '_blank');
        eventElement.setAttribute('rel', 'noreferrer nofollower');
        eventElement.style.setProperty('--event-background-image', `url(${event.imageUrl})`);

        const previewElement = document.createElement('div');
        previewElement.className = 'preview';
        eventElement.appendChild(previewElement);

        const eventTimeElement = document.createElement('div');
        eventTimeElement.className = 'eventTime';
        eventTimeElement.textContent = event.time;
        previewElement.appendChild(eventTimeElement);

        const contentElement = document.createElement('div');
        contentElement.className = 'content';
        eventElement.appendChild(contentElement);

        const titleElement = document.createElement('h3');
        titleElement.textContent = event.title;
        contentElement.appendChild(titleElement);

        const dividerElement = document.createElement('div');
        dividerElement.className = 'divider';
        contentElement.appendChild(dividerElement);

        const locationElement = document.createElement('p');
        locationElement.textContent = event.location;
        contentElement.appendChild(locationElement);

        const addressElement = document.createElement('small');
        addressElement.textContent = event.address;
        contentElement.appendChild(addressElement);

        timeline.appendChild(eventElement);
    });
};

/* --- ДРЕСС-КОД --- */

const DRESS_CODE_COLORS = [
    { code: '#b49bbb' },
    { code: '#fcc9c6' },
    { code: '#ffede9', withBorder: true },
    { code: '#ceecff' },
    { code: '#b4d3bb' }
];

const renderDressCodeList = () => {
    const dressCodeSection = document.querySelector('.section.dressCode');
    if (!dressCodeSection) return;

    const list = dressCodeSection.querySelector('.list');
    if (!list) return;

    DRESS_CODE_COLORS.forEach((color) => {
        listItem = document.createElement('div');
        listItem.className = 'listItem';
        listItem.style.backgroundColor = color.code;
        if (color.withBorder) {
            listItem.style.border = 'var(--border-width-1x) solid var(--border-color-1)';
        }

        listItem.addEventListener('mouseover', () => {
            dressCodeSection.style.setProperty('--section-background-color', color.code);
        });

        listItem.addEventListener('mouseleave', () => {
            dressCodeSection.style.setProperty('--section-background-color', null);
        });

        list.appendChild(listItem);
    });
};

const handleDOMContentLoaded = () => {
    renderCalendar();
    renderProgrammEvents();
    renderDressCodeList();
};

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
