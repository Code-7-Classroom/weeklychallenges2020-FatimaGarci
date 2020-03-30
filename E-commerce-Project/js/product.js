// Mobiel navbar
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
  
    burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      //Burger Animation
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide('');


  
//   Slide Show
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80";
images[1] = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";
images[2] = "https://images.unsplash.com/photo-1475274226786-e636f48a5645?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80";
images[3] = "https://images.unsplash.com/photo-1523359247812-29dde5ac53a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

// Change Image
function changeImg(){
	document.getElementById("slide").src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


// Filter

var items = document.getElementsByClassName('product-item');
function filterItems() {
    var type = document.getElementById("filterSelect").value;
    for (var i = 0; i < items.length; i++){
        var itemType= items[i].getElementsByClassName("item__type");
        var itemTypeValue= itemType[0].innerText;
        if(itemTypeValue == type){
            items[i].style.display = '';
        }
        else if(type == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }
    }
}

// Price
var items = document.getElementsByClassName('product-item');

function priceItems() {
    var price = document.getElementById("priceSelect").value;

    for (var i = 0; i < items.length; i++){
        var itemPrice= items[i].getElementsByClassName("item__price");
        var itemPriceValue= itemPrice[0].innerText;

        if(itemPriceValue == price){
            items[i].style.display = '';
        }
        else if(price == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }

    }
}
