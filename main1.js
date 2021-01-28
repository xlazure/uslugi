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

    HamburgerMenu();
});