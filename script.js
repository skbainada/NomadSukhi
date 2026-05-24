
const words = ['Traveller','Explorer','Trekker','YouTuber'];

let i = 0;
let j = 0;
let deleting = false;

function type(){

let current = words[i];

if(!deleting){
document.querySelector('.typing').textContent =
current.substring(0,j++);
}else{
document.querySelector('.typing').textContent =
current.substring(0,j--);
}

if(j === current.length + 1){
deleting = true;
setTimeout(type,1000);
return;
}

if(j === 0){
deleting = false;
i++;

if(i === words.length){
i = 0;
}
}

setTimeout(type,deleting ? 60 : 120);

}

type();

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll',()=>{

topBtn.style.display =
window.scrollY > 400 ? 'block' : 'none';

reveal();

});

topBtn.addEventListener('click',()=>{

window.scrollTo({
top:0,
behavior:'smooth'
});

});

function reveal(){

const reveals = document.querySelectorAll('.reveal');

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top;
const height = window.innerHeight;

if(top < height - 100){
el.classList.add('active');
}

});

}

gsap.from('.hero-box',{
opacity:0,
scale:0.8,
duration:1.5
});

gsap.from('nav',{
y:-100,
duration:1
});
