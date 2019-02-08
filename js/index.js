const display = document.querySelector('.calculator input[name=display]')

document.querySelectorAll('.digits button, .opers button')
.forEach( btn => btn.addEventListener('click', digitOperPressed ));

function digitOperPressed(e){
    display.value += e.target.innerText;
}

document.querySelector('.result')
.addEventListener('click', function(){
    display.value = eval(display.value);
})
document.querySelector('.clear')
.addEventListener('click', function(){
    display.value = display.value.substring(0, display.value.length - 1);
})
document.querySelector('.clear-all')
.addEventListener('click', function(){
    display.value = "";
})