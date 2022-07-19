const nav = document.getElementById('myTopnav');
const bars = document.getElementById('bars');
const links = document.querySelectorAll('.nav-link');

function menuFunction() {
  if (nav.className === 'topnav') {
    nav.classList.add('visible');
    bars.innerHTML = '&#10006;';
  } else {
    nav.classList.remove('visible');
    bars.innerHTML = '&#9776;';
  }
}

bars.addEventListener('click', menuFunction);

links.forEach((el) => el.addEventListener('click', menuFunction));
