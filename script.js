// Basic form submission alert
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you! I will be in touch soon.');
  this.reset();
});