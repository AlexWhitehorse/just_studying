const checkEmptyInputs = (selector, trigger) => {
    const inputs = document.querySelectorAll(selector),
        btnRtigger = document.querySelector(trigger);

    btnRtigger.addEventListener('click', (e) => {
        inputs.forEach((item) => {
            
            // if (item.value === '' || item ) {

            // }
            e.preventDefault();
            console.log(item, e);
        })
    })
    // inputs.forEach(item => {
    //     trigger.addEventListener('input', () => {
    //         item.value = item.value.replace(/\D/, '');
    //     })
    // })
};

export default checkEmptyInputs;