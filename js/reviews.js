(function () {
    const imgSlides = [
        '<img class = "reviews__image" src="img/photographer.jfif" alt="Photographer"></img>',
        '<img class = "reviews__image" src="img/elefant.jfif" alt="Elefant"></img>',
        '<img class = "reviews__image" src="img/in-car.jfif" alt="In car"></img>'
    ];

    const textSlides = document.querySelectorAll(".reviews__slide");

    let currentSlide = 0;
    let prevSlide = textSlides.length - 1;
    
    const dots = document.querySelector('.click-dots');

    for(let i=0; i<textSlides.length; i++){
        const dot = document.createElement("div");
        dot.classList.add("click-dot");
        dots.appendChild(dot);
        dot.addEventListener("click",nextSlide.bind(null,i));
    }

    const allDots = document.querySelectorAll(".click-dot");
    allDots[0].classList.add("active-dot");

    setDesplayNone(textSlides);
    textSlides[0].style.left = "0";
    textSlides[0].style.display = "block";  

    function setDesplayNone(textSlides){
        for (let i=0; i<textSlides.length; i++){
            textSlides[i].style.display = "none";    
        }
    }

    function renderSlides(numSlide){
        textSlides[prevSlide].style.animationName = "";

        setDesplayNone(textSlides);
      
        textSlides[numSlide].style.display = "block";   
        if (numSlide > currentSlide){
            textSlides[numSlide].style.animationName = "leftNext";
            textSlides[currentSlide].style.animationName = "leftCurr";    
        }
        else {
            textSlides[numSlide].style.animationName = "rightNext";
            textSlides[currentSlide].style.animationName = "rightCurr";
        }
        
        prevSlide = currentSlide;
        currentSlide = numSlide;
    }

    function renderDot(numSlide){
        const currDot = allDots[numSlide];
        currDot.classList.add("active-dot");
        const prevDot = allDots[currentSlide];
        prevDot.classList.remove("active-dot");
    }

    function renderImages(){
        const imageConteiner = document.querySelector(".reviews__image-slide");
        imageConteiner.innerHTML = imgSlides[currentSlide];          
    }

    function nextSlide(numSlide){
        if (numSlide !== currentSlide){  
            renderDot(numSlide);

            renderSlides(numSlide);  
            renderImages();  
        } 
    }

    renderImages(imgSlides);  
})();