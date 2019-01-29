//mousOver
const mouseOverA = document.querySelector("nav");
mouseOverA.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
        setTimeout(function() {
        event.target.style.color = "blue";
        }, 500);
  }, false);

//mouseEnter
const mouseEnterA = document.querySelector('.content-pick'); 
mouseEnterA.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "red";
      }, 500);
    event.stopPropagation();  
  }, false);
const mouseEnterB = document.querySelector('.content-section'); 
mouseEnterB.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "red";
      }, 500);
    event.stopPropagation();  
  }, false);

//focus
const blurA = document.getElementById('form');
blurA.addEventListener('focus', function( event ) {
  event.target.style.background = 'gold';    
}, true);

//Blur
blurA.addEventListener('blur', e => {
  e.target.style.background = 'silver';    
}, true);

//scroll
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  const colorChangeA = document.querySelector('body');
  colorChangeA.style.color = 'pink';
  
}
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  
    
    if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
       
    });
    ticking = true;
    
  }
e.stopPropagation(); 
});


//Load
  window.addEventListener("load", function(event) {
    const colorChangeB = document.querySelector('body');
    colorChangeB.style.color = 'blue';
    console.log("IT FINISHED LOADING OH MY GOODNESS");
  });

//stopPropagtion
//event.stopPropagation();

//Prevent Default
  document.querySelector("nav").addEventListener("click", function(event) {
         event.preventDefault();
}, false);



  

