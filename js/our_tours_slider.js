var slideIndex = 1;
let myMediaQuery = window.matchMedia('(min-width: 500px)');

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex += n);
}

function plusSlideMob(n) {
  showSlidesMob(slideIndex += n);
}

function currentSlideMob(n) {
  showSlidesMob(slideIndex += n);
}

function showSlidesMob(n) {

  var i;
  var slides = document.getElementsByClassName('tour-card');
    if (n > slides.length) {slideIndex = slides.length}
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
    
  }
  
  function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('tour-card');
    if (n > slides.length-2) {slideIndex = slides.length-2}
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

    slides[slideIndex-1].style.display = "flex";
    slides[slideIndex].style.display = "flex";
    slides[slideIndex+1].style.display = "flex";
}


  function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
      showSlides(slideIndex); 
      document.getElementById("next_bt").onclick = function(){plusSlides(1);}
      document.getElementById("prev_bt").onclick = function(){currentSlide(-1);}
      
     } else {
      showSlidesMob(slideIndex);
      document.getElementById("next_bt").onclick = function(){plusSlideMob(1);}
      document.getElementById("prev_bt").onclick = function(){currentSlideMob(-1);}
     }
  }

  widthChangeCallback(myMediaQuery);
  myMediaQuery.addEventListener('change',widthChangeCallback);





