function menuFunction () {
    const y = document.querySelector('.bars');
    const nav = document.getElementById('myTopnav');
    if(nav.className === 'topnav') {
        nav.classList.add('visible');
        y.innerHTML('&#10006;');
    }
    else{
        nav.classList.remove('visible');
        y.innerHTML('&#9776;');
    }
}