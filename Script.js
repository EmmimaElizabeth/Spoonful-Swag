document.addEventListener("DOMContentLoaded", function() {
    // Responsive Navigation Menu
    const menuButton = document.querySelector('.menu-button');
    const navBar = document.querySelector('.nav-bar');

    if (menuButton && navBar) {
        menuButton.addEventListener('click', () => {
            navBar.classList.toggle('show');
        });
    }

    // Form Submission Handling
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting normally

            const formData = new FormData(contactForm);

            // You can process the form data here (e.g., send it to a server using AJAX)

            for (const [name, value] of formData.entries()) {
                console.log('${name}: ${value}');
            }

            // Optionally, you can display a success message or clear the form fields
            contactForm.reset(); // Clear the form fields
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {

    // Scroll to Home section when clicking on "Home" link
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector("#home").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Scroll to About section when clicking on "About" link
    const aboutLink = document.querySelector('.about');
    if (aboutLink) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(".about").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    // Scroll to Contact section when clicking on "Contact" link
    const contactLink = document.querySelector('.contact');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(".contact").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Scroll to Recipe section when clicking on "Recipe" link
    const recipeLink = document.querySelector('.recipe');
    if (recipeLink) {
        recipeLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(".recipe").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Scroll to Categories section when clicking on "Categories" link
    const categoriesLink = document.querySelector('.categories');
    if (categoriesLink) {
        categoriesLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(".categories").scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }


});



