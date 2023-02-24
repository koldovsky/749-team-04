let slideIndex = 1;
const myMediaQuery = window.matchMedia("(min-width: 500px)");
const slides = document.querySelectorAll(".tour-card"); 

function changeSlideMob(n) {
  showSlidesMob(slideIndex += n);
}

function showSlidesMob(n) {
  let i;
    if (n > slides.length) {slideIndex = slides.length}
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
    
  }
  
  function changeSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n){
    let i;
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
      document.querySelector("#next_bt").onclick = function(){changeSlides(1);}
      document.querySelector("#prev_bt").onclick = function(){changeSlides(-1);}
      
     } else {
      showSlidesMob(slideIndex);
      document.querySelector("#next_bt").onclick = function(){changeSlideMob(1);}
      document.querySelector("#prev_bt").onclick = function(){changeSlideMob(-1);}
     }
  }

  widthChangeCallback(myMediaQuery);
  myMediaQuery.addEventListener("change",widthChangeCallback);





