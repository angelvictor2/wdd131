
const lastModified = document.querySelector('#lastModified');

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Utility function to save favorites
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ================================
// PRODUCTS LOGIC
// ================================

function addToFavorites(productName) {
    if (!favorites.includes(productName)) {
        favorites.push(productName);
        saveFavorites();
        alert(`${productName} has been added to your favorites.`);
    } else {
        alert(`${productName} is already in your favorites.`);
    }
}

// Attach event listeners to product buttons (safe for all pages)
const productButtons = document.querySelectorAll('[data-product]');

if (productButtons.length > 0) {
    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            addToFavorites(button.dataset.product);
        });
    });
}

// ================================
// CONTACT FORM LOGIC
// ================================

function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const formMessage = document.querySelector('#formMessage');

    if (!nameInput || !emailInput || !messageInput) return;

    const userData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };

    if (userData.name && userData.email && userData.message) {
        localStorage.setItem('contactData', JSON.stringify(userData));

        formMessage.textContent = `Thank you, ${userData.name}! We will contact you soon.`;
        formMessage.style.color = 'green';

        // Reset form
        event.target.reset();
    } else {
        formMessage.textContent = 'Please complete all required fields.';
        formMessage.style.color = 'red';
    }
}

// Attach form submit listener (safe check)
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ================================
// OPTIONAL: DISPLAY FAVORITES COUNT
// ================================

function displayFavoritesCount() {
    const countElement = document.querySelector('#favoritesCount');
    if (countElement) {
        countElement.textContent = `Favorites: ${favorites.length}`;
    }
}

displayFavoritesCount();