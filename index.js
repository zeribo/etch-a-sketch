const modal = document.querySelector('.modal');
const container = document.querySelector('.container');


function gridMaker(ratio) {

    for (let i = 0; i < ratio; i++) {

        const row_container = document.createElement('div');
        row_container.classList.add('row');

        for (let j = 0; j < ratio; j++) {
            const grid_div = document.createElement('div');
            grid_div.classList.add('grid');


            row_container.appendChild(grid_div);
        }

        container.appendChild(row_container);
    }
}

const clear_btn = document.querySelector('#clear');

function shader() {
    const squares = document.querySelectorAll('.grid');

    squares.forEach(square => {

        square.addEventListener('mouseenter', () => {

            square.classList.add('shade');

        });
    });

    clear_btn.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});
}


gridMaker(16);
shader();



const input = document.querySelector('input');
const set_btn = document.querySelector('#set-grid');

input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});


const error_num = document.querySelector('span');

set_btn.addEventListener('click', () => {

    error_num.textContent = '';

    const int_inp = parseInt(input.value);

    if (int_inp < 1 || int_inp > 100) {
        error_num.textContent = 'Wrong value!';
        return;
    }
    
    container.innerHTML = '';


    gridMaker(int_inp);
    shader();


});

const shade = document.querySelector('#shade');
const rainbow = document.querySelector('#rainbow');

shade.addEventListener('click', () => {
    if (rainbow.classList.contains('active-color')) {
        rainbow.classList.remove('active-color');
    }
    
}); 




