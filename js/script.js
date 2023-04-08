
const burgerButton = document.querySelector('.burger__button');

const burgerBody = document.querySelector('.burger__body');





const burgerButtonDecors = document.getElementsByClassName('burger__decor');


console.log(burgerButton);

const mainBody = document.querySelector('body');

const burgerLinks = document.getElementsByClassName('bg_link');



burgerButton.addEventListener('click', function ()  {

    mainBody.classList.toggle('body_noScroll');
    


    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
        
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');

    }
   
    for (let i = 0; i < burgerButtonDecors.length; i++) {
        burgerButtonDecors[i].classList.toggle('burger__dec__active');
        
    }
    
});
for (let i = 0; i < burgerLinks.length; i++) {
    burgerLinks[i].addEventListener('click', function ()  {
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');
        mainBody.classList.toggle('body_noScroll');
        for (let i = 0; i < burgerButtonDecors.length; i++) {
            burgerButtonDecors[i].classList.toggle('burger__dec__active');
            
        }
    });
    
}

new Swiper('.image-slider' ,{
    slidesPerView:1,
    
    loop:true,
    
    
}); 
new Swiper('.fb-slider' ,{
    slidesPerView:1,
   
    
    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    }
    
}); 




const navSubMenuButons = document.querySelectorAll('.scroll__btn[data-goto]');




function scroll(e){
    
    
    const link= e.target;
    const scrBlock =document.querySelector(link.dataset.goto);
    const a = scrBlock.getBoundingClientRect().top + pageYOffset;
    window.scrollTo({
        behavior:"smooth",
        top:a,
    });
    

    

}





for(let i=0;i<navSubMenuButons.length;i++){
    navSubMenuButons[i].addEventListener('click',scroll);
    
}