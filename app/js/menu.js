const btnhamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnhamburger.addEventListener('click', function(){
    //console.log('open de hamburger');
    if(header.classList.contains('open')){ //close
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        
    }else{//open hamburguer
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});

/* const bajar = document.getElementById('head');

bajar.addEventListener('scroll', function(){
    if (scroll > 100) {
        $(".header").css("background-color" , "red");
      }else{
          $(".header").css("background-color" , "white");  	
      }
}); */

/* function scroll(){
    const $scroll = d.querySelector(".header");    
    $scroll = window.scrollY();
      if (scroll > 300) {
        $(".header").css("background-color" , "white");
      }

      else{
          $(".header").css("background-color" , "white");  	
      }
} */

