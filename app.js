const btn = document.querySelector('.switch');
const background = document.body;

let counter = 0;

const toggler = () => {
    let slideVal = '';

    if(counter === 0) {
        slideVal = 'translateX(100%)';

        localStorage.setItem('slideVal', slideVal);
        
        background.style.backgroundColor = "black";
        btn.style.backgroundColor = "black";
        
        counter = 1;
    } else {
        slideVal = 'translateX(0%)';
        
        localStorage.setItem('slideVal', slideVal);

        background.style.backgroundColor = "white";
        btn.style.backgroundColor = "white";

        counter = 0;
    }

    btn.style.setProperty('--slideVal', slideVal);
};

btn.addEventListener('click', () => {
    toggler();
    console.log('this is clicked');
});

