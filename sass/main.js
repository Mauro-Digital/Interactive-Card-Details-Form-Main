// CARDHOLDER NAME
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

// Card number.
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');

// MM
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

// YY
let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearError = document.querySelector('.form__input-yy--error');

// CVC
let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCvc');
let cvcError = document.querySelector('.form__input-cvc--error');

// Ingreso dinámico del nombre.
nameInput.addEventListener('input', ()=>{
    if(nameInput.value == ''){
        nameCard.innerText = 'JANE APPLESEED'
    } else {
        nameCard.innerText = nameInput.value;
    }    
});

// Ingreso dinamico del numero.
numberInput.addEventListener('input', event=>{

    let inputValue = event.target.value;
    
    // Actualizando graficamente la tarjeta:
    numberCard.innerText = numberInput.value;

    // Validando que haya una letra:
    let regExp = /[A-z]/g;
    if(regExp.test(numberInput.value)){
        showError(numberInput, numberErrorDiv, 'Wrong format, numbers only');               
    }else{
        // Borrar el ultimo espacio agregado por el usuario. 
        // Y agregar un espacio despues de 4 numeros.
        // Para quitar el error cuando borro la letra
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        showError(numberInput, numberErrorDiv, '', false);        
    }

    // Mostrando los ceros(0) por defecto cuando no se ha ingresado nada:
    if(numberInput.value == ''){
        numberCard.innerText = '0000 0000 0000 0000';
    }
});

// Ingreso dinámico del mes.
monthInput.addEventListener('input', ()=>{    
    monthCard.innerText = monthInput.value;    
});

// Ingreso dinamico del año
yearInput.addEventListener('input', ()=>{    
    yearCard.innerText = yearInput.value;    
});

// Ingreso dinamico de cvc
cvcInput.addEventListener('input', ()=>{    
    cvcCard.innerText = cvcInput.value;    
});

// Boton Confirm.
let confirmBtn = document.querySelector('.form__submit');

confirmBtn.addEventListener('click', event=>{
    event.preventDefault();
    console.log(parseInt(monthInput.value));   

    // Validar Name
    verifyIsFilled(nameInput, nameErrorDiv);

    // Validar Numero     
    
    // Validar mes.
    if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){        
        showError(monthInput, monthErrorDiv, '', false);      
    }else{
        showError(monthInput, monthErrorDiv, 'Month incorrect');
    }

    // Validar año

    // Validar cvc

});

// Funciones:
function showError(divInput, divError, msgError, show = true){
    if(show){
        divError.innerText = msgError;
        divInput.style.borderColor = '#FF0000';
    }else{
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }    
}

function verifyIsFilled(divInput, divError){
    if(divInput.value.length> 0){
        showError(divInput, divError, "", false);
    }else{
        showError(divInput, divError, "Can't be blank");
    }
}



    