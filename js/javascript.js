document.addEventListener('DOMContentLoaded', () => {
    // Get references to all elements
    const foodImages = {
        food1: document.getElementById('food1'),
        food2: document.getElementById('food2'),
        food3: document.getElementById('food3'),
        food4: document.getElementById('food4'),
        food5: document.getElementById('food5'),
        food6: document.getElementById('food6'),
        food7: document.getElementById('food7'),
        food8: document.getElementById('food8')
    };
    
    const mainFood = document.getElementById('food');
    const checkMenuBtn = document.getElementById('checkMenuBtn');
    const menuModal = document.getElementById('menuModal');
    const closeModal = document.getElementById('closeModal');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    // Mobile menu toggle
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Add click event listeners to all food images
    Object.values(foodImages).forEach(foodElement => {
        if (foodElement) {
            foodElement.addEventListener('click', () => {
                const img = foodElement.getAttribute('data-img');
                if (mainFood && img) {
                    mainFood.style.backgroundImage = `url('${img}')`;
                }
            });

            // Optional: Add hover effect
            foodElement.addEventListener('mouseenter', () => {
                const img = foodElement.getAttribute('data-img');
                if (mainFood && img) {
                    mainFood.style.backgroundImage = `url('${img}')`;
                }
            });
        }
    });

    // Menu modal functionality
    if (checkMenuBtn && menuModal) {
        checkMenuBtn.addEventListener('click', () => {
            menuModal.style.display = 'flex';
        });
    }

    if (closeModal && menuModal) {
        // Close modal with close button
        closeModal.addEventListener('click', () => {
            menuModal.style.display = 'none';
        });

        // Close modal when clicking outside
        menuModal.addEventListener('click', (e) => {
            if (e.target === menuModal) {
                menuModal.style.display = 'none';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuModal) {
            menuModal.style.display = 'none';
        }
    });

    // Optional: Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Reset main image when mouse leaves all food items
    const menu = document.querySelector('.menu');
    if (menu && mainFood) {
        menu.addEventListener('mouseleave', () => {
            mainFood.style.backgroundImage = 'url("css/food.jpg")';
        });
    }
});