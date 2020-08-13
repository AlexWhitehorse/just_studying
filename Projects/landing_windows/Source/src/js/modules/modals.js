const modals = () => {

    /**
     * method bindModal(trigger, modal, close)
     * @Selector triggerSelectop - На что сработает модальное окно
     * @Selector modalSelector - Само модальное окно
     * @Selector closeSelector - Елемент по срабатыванию которого, окно будет закрываться
     */
    function bindModal(triggerSelectop, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelectop),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.body.style.overflow = 'hidden';
            document.querySelector(selector).style.display = 'block';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};

export default modals;