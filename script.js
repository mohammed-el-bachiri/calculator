let input = document.querySelector('.input');
let p = document.querySelectorAll('div.numbers p');
let btn = document.querySelector('#click');
let delet = document.querySelector('#delet');
let operator = document.querySelectorAll('div.operator p');

let oprtSympbol = '';

let value1 = '';
let value2 = '';

p.forEach(element => {
    element.addEventListener('click', ()=> {
        input.value += element.textContent;
    });
});

operator.forEach((oprt)=>{
    oprt.addEventListener('click', ()=>{
        oprtSympbol = oprt.textContent;
        value1 = input.value;
        input.value = '';
    });
});
let x = 0;

btn.addEventListener('click', ()=>{
    if(x == 0){
        value2 = input.value;
        input.value = ''; 
        switch (oprtSympbol) {
            case '+':
                x = Number(value1) + Number(value2);
                break;
            case '-':
                x = Number(value1) - Number(value2);
                break;
            case 'x':
                x = Number(value1) * Number(value2);
                break;
            case '/':
                x = Number(value1) / Number(value2);
                break;
        }
        input.value = `${value1} ${oprtSympbol} ${value2} = ${x}`;
    }
});
delet.addEventListener('click', ()=>{
    input.value = '';
    value1 = 0;
    value2 = 0;
    x = 0;
});