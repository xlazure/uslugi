const slide = document.querySelector('.slider');
const slideSize = document.querySelectorAll('.slider img');
const slideDown = document.querySelector('.start-btn');
const html = document.getElementsByTagName("html");
let Page1 = slideSize[0].clientHeight;
let size = slideSize[0].clientWidth;
let counter = 0;


async function slider(){
    const timer = ms => new Promise(res => setTimeout(res, ms));
   
    for(let i = 0; i < 5; i++){
        let currentSlide = -size * i;
        if (i == 4){
            i = 0;
            currentSlide = 0;
            slide.style = `
            transform: translateX(${currentSlide}px);
            transition: 0s;
            `;
            await timer(8000);
        }
        else{
        slide.style = `
        transform: translateX(${currentSlide}px);
        transition: 3s ease-in-out;
        `;}
        await timer(8000);
        counter++;
        
    }
    
}
window.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    console.log(scrollPercentRounded);

    if(scrollPercentRounded > 20){
        html.style = 'scrollbar-width: scroll';
    }
});

function HamburgerMenu(){
    const dropDownMenu = document.querySelector('.drop-downMenu');
    const menu = document.querySelector('.hambmenu');    

    menu.addEventListener('click',() =>{
       if(dropDownMenu.style.left == '0vw') dropDownMenu.style.left = '-100vw';
       else dropDownMenu.style.left = '0vw';
    });
    dropDownMenu.addEventListener('click',()=>{
        dropDownMenu.style.left = '-100vw';
    });
}

window.addEventListener('DOMContentLoaded',()=>{
    let WinWidth = window.innerWidth;
    if(WinWidth > 1024) slider();
    HamburgerMenu();
});


slideDown.addEventListener('click',() =>{
    window.scrollTo(0,Page1);
});




