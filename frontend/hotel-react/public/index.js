document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const hotelCards = document.querySelectorAll('.card');
hotelCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    card.style.transition = 'transform 0.3s, box-shadow 0.3s';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});
document.querySelectorAll('.btn-outline-secondary').forEach(button => {
  button.addEventListener('click', () => {
    alert('Fitur "Telusuri" akan segera tersedia!');
  });
});

