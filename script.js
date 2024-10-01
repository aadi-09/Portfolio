// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email!");
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Scroll-triggered animations
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Modal pop-up for projects
const modals = document.querySelectorAll('.modal');
const projectLinks = document.querySelectorAll('.project a');

projectLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        modals[index].classList.add('show');
    });
});

modals.forEach(modal => {
    modal.querySelector('.close').addEventListener('click', () => {
        modal.classList.remove('show');
    });
});

// Optional: Dark mode toggle
const toggleButton = document.querySelector('#theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
