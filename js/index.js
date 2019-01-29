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
  }, false);

//focus
const blurA = document.getElementById('form');
blurA.addEventListener('focus', function( event ) {
  event.target.style.background = 'gold';    
}, true);

//Blur
blurA.addEventListener('blur', function( event ) {
  event.target.style.background = 'silver';    
}, true);

//scroll

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  const colorChangeA = document.querySelector('p');
  colorChangeA.style.color = 'pink';// Do something with the scroll position
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
});




  

