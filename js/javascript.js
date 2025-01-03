// Get references to the elements
let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');
let food5s = document.getElementById('food5');
let food6s = document.getElementById('food6');
let food7s = document.getElementById('food7');
let food8s = document.getElementById('food8');
let foods = document.getElementById('food');

// Get references to elements
let checkMenuBtn = document.getElementById('checkMenuBtn');
let menuModal = document.getElementById('menuModal');
let closeModal = document.getElementById('closeModal');

// Change background images on click of menu items
food1s.addEventListener('click', () => {
    let img = food1s.getAttribute('data-img'); // Get the image associated with food1
    foods.style.backgroundImage = `url('${img}')`;
});

food2s.addEventListener('click', () => {
    let img = food2s.getAttribute('data-img'); // Get the image associated with food2
    foods.style.backgroundImage = `url('${img}')`;
});

food3s.addEventListener('click', () => {
    let img = food3s.getAttribute('data-img'); // Get the image associated with food3
    foods.style.backgroundImage = `url('${img}')`;
});

food4s.addEventListener('click', () => {
    let img = food4s.getAttribute('data-img'); // Get the image associated with food4
    foods.style.backgroundImage = `url('${img}')`;
});

food5s.addEventListener('click', () => {
    let img = food5s.getAttribute('data-img'); // Get the image associated with food5
    foods.style.backgroundImage = `url('${img}')`;
});

food6s.addEventListener('click', () => {
    let img = food6s.getAttribute('data-img'); // Get the image associated with food6
    foods.style.backgroundImage = `url('${img}')`;
});

food7s.addEventListener('click', () => {
    let img = food7s.getAttribute('data-img'); // Get the image associated with food7
    foods.style.backgroundImage = `url('${img}')`;
});

food8s.addEventListener('click', () => {
    let img = food8s.getAttribute('data-img'); // Get the image associated with food8
    foods.style.backgroundImage = `url('${img}')`;
});

// Show the menu modal when "Check out Menu" button is clicked
checkMenuBtn.addEventListener('click', () => {
    menuModal.style.display = 'flex';
});

// Close the menu modal when the close button is clicked
closeModal.addEventListener('click', () => {
    menuModal.style.display = 'none';
});

// Close the menu modal when clicking outside the content
menuModal.addEventListener('click', (e) => {
    if (e.target === menuModal) {
        menuModal.style.display = 'none';
    }
});
