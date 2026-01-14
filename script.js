document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            if (name) {
                alert(`Thank you, ${name}! Your inquiry has been received.`);
                contactForm.reset();
            }
        });
    }

    // 2. Order Online Interaction
    const form = document.getElementById('orderForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop form submission

        // Ambil values
        const name = document.getElementById('customerName').value.trim();
        const item = document.getElementById('itemSelect').value;
        const quantity = document.getElementById('quantity').value;
        const time = document.getElementById('orderTime').value;
        const orderType = document.querySelector('input[name="orderType"]:checked')?.value || '';
        const special = document.getElementById('specialRequest').value.trim();

        // Message
        let message = `Thank you ${name}!\nYour order for ${item} (x${quantity}) `;
        message += orderType ? `as ${orderType} ` : '';
        message += `will be ready at ${time}.`;
        if(special) {
            message += `\nSpecial Request: ${special}`;
        }

        alert(message);

        // Reset form
        form.reset();
    });

    // 3. Simple Scroll Effect for Navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
});