const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


document.querySelector('.container').addEventListener('mouseover', (e) => {
    if (e.target.matches('.grid')) {
        
        if (rainbow.classList.contains('active-color'))  {
            e.target.style.backgroundColor = getRandomRgbColor();
        }
        else if (shade.classList.contains('active-color')) {
            e.target.style.backgroundColor = 'green';
        }
        
    }
});


/*document.querySelector('#clear').addEventListener('click', (e) => {
    if (e.target.matches('.grid')) {
        e.target.style.backgroundColor = 'white';
       
        
    }
}); */







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




function toClear() {

    const clear_btn = document.querySelector('#clear');
    

    clear_btn.addEventListener('click', () => {
        const squares = document.querySelectorAll(('.grid'));
        console.log('meow');
        squares.forEach(square => {
            square.style.backgroundColor = 'white';
        });

    });
}

toClear();





gridMaker(16);




const input = document.querySelector('input');
const set_btn = document.querySelector('#set-grid');

input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});


const error_num = document.querySelector('span');

set_btn.addEventListener('click', () => {

    error_num.textContent = '';

    const int_inp = parseInt(input.value);

    if ((int_inp < 1 || int_inp > 100) || input.value.trim() === "") {
        error_num.textContent = 'Wrong value!';
        return;
    }
    
    container.innerHTML = '';


    gridMaker(int_inp);
    


});

const shade = document.querySelector('#shade');
shade.classList.add('active-color')

const rainbow = document.querySelector('#rainbow');


shade.addEventListener('click', () => {
    if (rainbow.classList.contains('active-color')) {
        rainbow.classList.remove('active-color');
    }

    shade.classList.add('active-color');
    
}); 

rainbow.addEventListener('click', () => {
    if (shade.classList.contains('active-color')) {
        shade.classList.remove('active-color')
    }

    rainbow.classList.add('active-color');
})




