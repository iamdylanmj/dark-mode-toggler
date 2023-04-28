const btn = document.querySelector('.switch');
const bg = document.body;

let counter = 0;

const toggler = (transXVal, color) => {
        // change the background and button color
        bg.style.backgroundColor = color;
        btn.style.backgroundColor = color;

        let movement = `translateX(${transXVal}%)`;

        // move the button
        btn.style.setProperty('--slideVal', movement);
        counter = counter === 0 ? 1 : 0;

        // // saving values to localStorage
        // localStorage.setItem('counter', counter);

        
};


btn.addEventListener('click', () => {
    let transXVal = counter === 0 ? '100' : '0';
    let color = counter === 0 ? 'black' : 'white';

    localStorage.setItem('transXVal', transXVal);
    localStorage.setItem('color', color);

    toggler(transXVal, color);
});


toggler(
    localStorage.getItem('transXVal'),
    localStorage.getItem('color')
);