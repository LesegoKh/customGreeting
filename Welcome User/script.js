const form = document.getElementById('greetingForm');
const usernameInput = document.getElementById('username');
const greetingText =  document.getElementById('greetingText');

form.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent default setting
    const username = usernameInput.value.trim(); // fetch username

    // Our greeting function
    if (username){
        greetingText.textContent = `Welcome to Web3, ${username}!`;
    }else {
        greetingText.textContent = 'Please enter your name';
    }
});

// this is the popup
const showPopupBtn = document.getElementById('showPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

showPopupBtn.addEventListener('click', function(){
    popup.style.display = 'block';
});

closePopupBtn.addEventListener('click', function(){
    popup.style.display = 'none';
});