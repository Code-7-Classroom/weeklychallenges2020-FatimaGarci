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

  function validateForm(){
    var x = document.forms["form"]["email"].value;
    var y = document.forms["form"]["name"].value;
    var z = document.forms["form"]["message"].value;
    var w = document.forms["form"]["lastname"].value;
    if(x == ""){
        alert("Fill Out Email");
        return false;
    }
    else if(y == ""){
        alert("Fill Out Name");
        return false;
    }
    else if (w == "") {
        alert("Last Name must be filled out");
        return false;
      } 
      else if (z == "") {
        alert("Message must be filled out");
        return false;
      }
    else{
        return true;
    }
}
