/**
 * 
 * @param {string} headerSelector  -  Селектор шапки слайдера
 * @param {string} tabSelector  -  Селектор одного элемента шапки
 * @param {string} contentSelector  -  Контент слайда
 * @param {string} activeClass  -  Класс активности
 */
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    /**
     * showTabContent - отслеживает, на какой именно элемент нажал пользователь
     * @param {number} i - Номер элемента, на котором был клик
     */
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        
        // Если клик был в один из табов
        if (target && 
            (target.classList.contains(tabSelector.replace(/\./,  '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./,  '')))) {
            tab.forEach((item, i) => {
                console.log(target.parrentNode, item);
                if (target == item || target.parentNode == item) {
                    
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
};

export default tabs;