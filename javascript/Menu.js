const menuBtn = document.querySelector('.menu-btn');
        let menuOpne = false;
        menuBtn.addEventListener('click',() => {
            if(!menuOpne){
                menuBtn.classList.add('opne');
                menuOpne = true;
            }else{
                menuBtn.classList.remove('opne');
                menuOpne = false;
            }
        });