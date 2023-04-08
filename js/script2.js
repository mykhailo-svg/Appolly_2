
const burgerButton = document.querySelector('.burger__button');

const burgerBody = document.querySelector('.burger__body');





const burgerButtonDecors = document.getElementsByClassName('burger__decor');


console.log(burgerButton);

const mainBody = document.querySelector('body');





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
















let lazyImg = document.querySelectorAll('img[data-src]');

console.log(lazyImg);
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if(lazyImg.length>0){
    lazyImg.forEach(img =>{
        if(img.dataset.src){
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    })
}

console.log(lazyImg[0].dataset.src);

function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        item => pageYOffset >item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImg[imgIndex].dataset.src) {
            lazyImg[imgIndex].src = lazyImg[imgIndex].dataset.src;
            lazyImg[imgIndex].removeAttribute('data-src');
       }
       delete lazyImagesPositions[imgIndex];
    }
   
    
}

window.addEventListener('scroll', function ()  {
    lazyScrollCheck();
});

const tabButtons = document.getElementsByClassName('blog__tab__list__item');

const Tabs = document.getElementsByClassName('blog__column');

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function ()  {
        for (let i = 0; i < Tabs.length; i++) {
            Tabs[i].classList.remove('tab_show');
            
        }
        Tabs[i].classList.add('tab_show');
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove('tab_show');
            
        }
        tabButtons[i].classList.add('tab_show');
    });
    
}


const CategoryDecors = document.querySelectorAll('.sidebar__category__list__item img');

const categorySublists = document.getElementsByClassName('category__sublist');

const categorySublistButtons = document.getElementsByClassName('sidebar__category__list__item');

for (let i = 0; i < categorySublistButtons.length; i++) {
    categorySublistButtons[i].addEventListener('click', function ()  {
      
        for (let a = 0; a < categorySublists.length; a++) {
            
           

               categorySublists[a].classList.remove('sublist__show');
                CategoryDecors[a].classList.remove('sub__Dec_show'); 
            
            
            
        }
        categorySublists[i].classList.toggle('sublist__show');
        CategoryDecors[i].classList.toggle('sub__Dec_show');
    });
    
}



const searchTitles = document.querySelectorAll('.blog__title');

const searchInput = document.querySelector('.sidebar__input');

const searchItems = document.querySelectorAll('.blog__item');
const blogCont = document.querySelector('.blog__columns');

const searchResult = document.querySelector('.blog__search');
let searchSucces = false;



searchInput.addEventListener('input', function ()  {
    lazyImg = document.querySelectorAll('img[data-src]');
    lazyImagesPositions=[];

    lazyImg.forEach(img =>{
        if(img.dataset.src){
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    })
    lazyImg = document.querySelectorAll('img[data-src]');
    
   let inputValue = searchInput.value.toLowerCase().trim();
   let inputKeyWords = inputValue.split("");

  
   const myArray = inputValue.split(" ");

  
  
   console.clear();
   console.log(lazyImg);
   blogCont.classList.remove("blog__hide");
   searchResult.innerHTML = "";
   console.log(myArray);
    if (inputValue == "") {
        
    }
    else{
       
        
        for (let a = 0; a < searchTitles.length; a++) {
            let searchItemContent =searchTitles[a].textContent.toLowerCase().trim();
            for (let i = 0; i < myArray.length; i++) {
                if (searchItemContent.includes(myArray[i])) {

                    searchSucces = true;
                    console.log("inc");
                
                    
                }
                if (searchSucces == true) {
                    let searchClone = searchItems[a].cloneNode(true);
                    searchResult.append(searchClone);
                    console.log(searchClone);
                    //console.log(searchItems[a]);
                    blogCont.classList.add("blog__hide");
                }
                searchSucces = false;
                
            }
            
        }
        /*for (let a = 0; a < searchTitles.length; a++) {
            let searchItemContent =searchTitles[a].textContent.toLocaleLowerCase().trim();
            if (searchItemContent.includes(inputValue)) {
                
                //console.log(searchItems[a]);
            }
            
        }*/
    }    
    

});

