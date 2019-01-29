   //`mouseover`
const mouseOverA = document.querySelector("nav");
mouseOverA.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
        setTimeout(function() {
        event.target.style.color = "red";
        }, 500);
  }, false);

const mouseEnterA = document.querySelector('.destination h4') 
mouseEnterA.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "red";
    }, 500);
  }, false);
  

/*
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	`dblclick`
*/