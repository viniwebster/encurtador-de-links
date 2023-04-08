const botaoMobile = document.querySelector('.menuMobile');

botaoMobile.addEventListener('click', ()=>{

    const menuMobile = document.querySelector('.nav__container');

    if(menuMobile.style.display == "none"){
        menuMobile.style.display = "flex"
    } else {
        menuMobile.style.display = "none"
    }

})