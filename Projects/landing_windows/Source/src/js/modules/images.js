import Scroll from './scroll';

const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

        imgPopup.classList.add('popup');
        workSection.appendChild(imgPopup);

        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display = 'none';

        imgPopup.appendChild(bigImage);

        workSection.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            if (target && target.classList.contains('preview')) {
                Scroll.hide();
                imgPopup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                const path = target.parentNode.getAttribute('href');
                bigImage.setAttribute('src', path);
            }

            if (target && target.matches('div.popup')) {
                Scroll.show();
                imgPopup.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
};

export default images;