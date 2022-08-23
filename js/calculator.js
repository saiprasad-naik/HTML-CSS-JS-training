var display = document.querySelector('#text-field');

var buttons = document.querySelectorAll('.calc-btns');
var displayValue = ' ';
for (item of buttons){
    item.addEventListener('click', (e)=>{
        buttonVal = e.target.innerText;
        if(buttonVal=='X'){
            buttonVal = "*";
            displayValue += buttonVal;
            display.value = displayValue;
        }
        else if(buttonVal=='AC'){
            displayValue = " ";
            display.value = displayValue;
        }
        else if(buttonVal=='='){
            display.value = eval(displayValue);
        }
        else{
            displayValue += buttonVal;
            display.value = displayValue;
        }

    })

}