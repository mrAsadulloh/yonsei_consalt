
// ================================
// 1️⃣ Hamburger menu toggle
// ================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Link bosilganda menu yopilishi
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// ================================
// 2️⃣ Service card toggle
// ================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('.service-details');

        // Toggle: oldin barcha detailsni yopish
        document.querySelectorAll('.service-details').forEach(d => {
            if(d !== details) d.style.display = 'none';
        });

        // Ochish / yopish
        if(details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
});


document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        message: e.target[3].value
    };

    const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);
});


