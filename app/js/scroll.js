window.addEventListener('scroll', function(){
    //console.log("fuckyou");
    let header = document.querySelector('header');
    let windowPositon = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPositon);
})