/**
 * 
 * @param {*} selector - Элемент в который рендкриться таймер
 * @param {*} deadlene - Время до окончания
 */
const timer = (selector, deadlene) => {
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        }else {
            return num;
        }
    };

    const getTimeRemaning = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor(( t/1000/60 ) % 60),
            hours = Math.floor(( t/(1000 * 60 * 60) ) % 24),
            days = Math.floor(( t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock(); // Bugfix Единичный вызов до старта таймера

        function updateClock() {
            const t = getTimeRemaning(endTime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };

    setClock(selector, deadlene);
};

export default timer;