const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(drop => {
  drop.addEventListener('click', e => {
    if(window.innerWidth <= 900){
      e.preventDefault(); // prevent default link
      drop.nextElementSibling.classList.toggle('active');
    }
  });
});