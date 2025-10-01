// Small JS for filter + mobile nav + year
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
chips.forEach(ch => ch.addEventListener('click', () => {
  chips.forEach(c=>c.classList.remove('is-active'));
  ch.classList.add('is-active');
  const f = ch.dataset.filter;
  cards.forEach(card => {
    card.style.display = (f === 'All' || card.dataset.category === f) ? '' : 'none';
  });
}));

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.navmenu');
if(toggle){
  toggle.addEventListener('click', ()=>{
    const open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

document.getElementById('y').textContent = new Date().getFullYear();
