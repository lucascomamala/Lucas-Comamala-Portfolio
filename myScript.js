/* Mobile Nav Bar Functionality */
const navBar = document.getElementById('myTopnav');
const bars = document.getElementById('bars');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu visibility
function menuFunction() {
  navBar.classList.toggle('visible');
  if (navBar.className === 'topnav') {
    bars.innerHTML = '&#10006;';
  } else {
    bars.innerHTML = '&#9776;';
  }
}

bars.addEventListener('click', menuFunction);

navLinks.forEach((el) => el.addEventListener('click', menuFunction));

/* Project Modal Builder */
const tree = document.createDocumentFragment();
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');
const btns = document.querySelectorAll('#mainp-button, .otherp-button');
const span = document.getElementsByClassName('close')[0];

// Project list
const projects = [
{
  title: 'Multi Post Stories',
  techs: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
  ftImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
{
  title: 'Project 2',
  techs: ['HTML', 'CSS', 'Javascript'],
  ftImage: './media/placeholder2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
{
  title: 'Another Project',
  techs: ['Java', 'SpringBoot'],
  ftImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
{
  title: 'Even More Projects',
  techs: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
  ftImage: './media/placeholder2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
{
  title: 'Project 3',
  techs: ['Python', 'SQL'],
  ftImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
{
  title: 'Project X',
  techs: ['Azucar', 'Flores', 'Muchos Colores'],
  ftImage: './media/placeholder2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
{
  title: 'I\'m tired',
  techs: ['Blood', 'Sweat', 'Tears'],
  ftImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  live: 'https://lucascomamala.github.io/Lucas-Comamala-Portfolio/',
  source: 'https://github.com/lucascomamala/Lucas-Comamala-Portfolio',
},
];

// Loop that dinamtcally builds a modal for each button
let title;
let tags;
let img;
let desc;
let links;
let liveBtn;
let srcBtn;

for (let i = 0; i < btns.length; i += 1) {
  btns[i].onclick = function createModal() { // eslint-disable-line no-loop-func
    modal.style.display = 'block';

    title = document.createElement('h3');
    title.setAttribute('class', 'modal-title');
    title.appendChild(document.createTextNode(projects[i].title));

    tags = document.createElement('div');
    tags.setAttribute('class', 'modal-tags');
    projects[i].techs.forEach((t, j) => {
      const span = document.createElement('span');
      span.appendChild(document.createTextNode(projects[i].techs[j]));
      tags.appendChild(span);
    });

    img = document.createElement('img');
    img.setAttribute('class', 'modal-img');
    img.setAttribute('src', projects[i].ftImage);
    img.setAttribute('alt', 'Project image');

    desc = document.createElement('p');
    desc.setAttribute('class', 'modal-p');
    desc.appendChild(document.createTextNode(projects[i].description));

    links = document.createElement('div');
    links.setAttribute('class', 'modal-btns');

    liveBtn = document.createElement('button');
    liveBtn.setAttribute('class', 'button live');
    liveBtn.setAttribute('type', 'button');
    liveBtn.setAttribute('onclick', `location.href="${projects[i].live}";`);
    liveBtn.innerHTML = 'See Live <i class="fa-solid fa-fire"></i>';

    srcBtn = document.createElement('button');
    srcBtn.setAttribute('class', 'button source');
    srcBtn.setAttribute('type', 'button');
    srcBtn.setAttribute('onclick', `location.href="${projects[i].source}";`);
    srcBtn.innerHTML = 'See Source <i class="fa-brands fa-github"></i>';

    links.appendChild(liveBtn);
    links.appendChild(srcBtn);

    tree.appendChild(title);
    tree.appendChild(tags);
    tree.appendChild(img);
    tree.appendChild(desc);
    tree.appendChild(links);

    modalContent.appendChild(tree);
  };
}

// When the user clicks the button, open the modal
span.onclick = function closeA() {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeB(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  }
};
