window.addEventListener('DOMContentLoaded', () => {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            headeing = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        headeing.textContent = 'В корзине: ';
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart);
        cart.appendChild(headeing);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

    createCart();

    let fiels = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    //17:44
});



