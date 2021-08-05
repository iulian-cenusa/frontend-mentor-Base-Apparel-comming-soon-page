let container = document.querySelector('#email-container');
let button = document.querySelector('#btn');
let input = document.querySelector('#email-input');

let error_icon = document.querySelector('#error-icon');
let error_message_container = document.querySelector('#error-container');
let error_message = document.querySelector('#error-message');

button.addEventListener("click",buttonPress);

function buttonPress(){
    let inputValue = input.value;
    console.log(inputValue.length);
    // check if value is empty
    if ( inputValue.length == 0 ) {
        error_icon.style.display = "flex";
        error_message_container.style.display = "flex";
        error_message.innerHTML = 'Email field can\'t be empty';
        container.classList.add('red');
    }
    else {
        error_icon.style.display = "none";
        error_message.style.display = "none";
        container.classList.remove('red');

        // check if email is valid
        let regex_email = /\S+@\S+\.\S+/;
        if (regex_email.test(inputValue) == false) {
            error_icon.style.display = "flex";
            error_message_container.style.display = "flex";
            container.classList.add('red');
            error_message.innerHTML = "Please provide a valid email";
        }else{
            error_icon.style.display = "none";
            error_message.style.display = "none";
            container.classList.remove('red');
        }

    }

}