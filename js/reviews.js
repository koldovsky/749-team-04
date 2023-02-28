(function () {
    const imgSlides = [
        '<img class="reviews__image" src="img/photographer.jfif" alt="Photographer"></img>',
        '<img class="reviews__image" src="img/elefant.jfif" alt="Elefant"></img>',
        '<img class="reviews__image" src="img/in-car.jfif" alt="In car"></img>'
    ];

    const textSlides = document.querySelectorAll(".reviews__slide");
    const textSlidesDesktop = document.querySelectorAll(".reviews__slide-desktop");

    let currentSlide = 0;
    let prevSlide = textSlides.length - 1;
    let desktop = getDesktop();
    
    const dots = document.querySelector('.click-dots');

    for(let i=0; i<textSlides.length; i++){
        const dot = document.createElement("div");
        dot.classList.add("click-dot");
        dots.appendChild(dot);
        dot.addEventListener("click",nextSlide.bind(null,i));
    }

    const allDots = document.querySelectorAll(".click-dot");
    allDots[0].classList.add("active-dot");

    const dotsD = document.querySelector('.click-dots-desktop');

    for(let i=0; i<textSlidesDesktop.length; i++){
        const dotD = document.createElement("div");
        dotD.classList.add("click-dot-desktop");
        dotsD.appendChild(dotD);
        dotD.addEventListener("click",nextSlide.bind(null,i));
    }

    const allDotsD = document.querySelectorAll(".click-dot-desktop");
    allDotsD[0].classList.add("active-dot");

    setDesplayNone(textSlides);
    textSlides[0].style.left = "0";
    textSlides[0].style.display = "block";  
 
    setDesplayNone(textSlidesDesktop);
    textSlidesDesktop[0].style.left = "0";
    textSlidesDesktop[0].style.display = "block";  

    function getDesktop(){
        return window.innerWidth>=768;
    }

    function setDesplayNone(slides){
        for (let i=0; i<slides.length; i++){
            slides[i].style.display = "none";    
        }
    }

    function renderSlides(numSlide, slides){
        slides[prevSlide].style.animationName = "";

        setDesplayNone(slides);
      
        slides[numSlide].style.display = "block";   
        if (numSlide > currentSlide){
            slides[numSlide].style.animationName = "leftNext";
            slides[currentSlide].style.animationName = "leftCurr";    
        }
        else {
            slides[numSlide].style.animationName = "rightNext";
            slides[currentSlide].style.animationName = "rightCurr";
        }
        
        prevSlide = currentSlide;
        currentSlide = numSlide;
    }

    function renderDot(numSlide, dots){
        const currDot = dots[numSlide];
        currDot.classList.add("active-dot");
        const prevDot = dots[currentSlide];
        prevDot.classList.remove("active-dot");
    }

    function renderImages(){
        const imageConteiner = document.querySelector(".reviews__image-slide");
        imageConteiner.innerHTML = imgSlides[currentSlide];
    }

    function nextSlide(numSlide){
        if (numSlide !== currentSlide){  
            let slides = desktop ? textSlidesDesktop : textSlides;
            let dots = desktop ? allDotsD : allDots;

            renderDot(numSlide, dots);

            renderSlides(numSlide, slides);  
            setTimeout(renderImages,1000);  
        } 
    }

    renderImages();  
    
    window.addEventListener('resize', () => {
        const curdesktop = getDesktop();
        
        let slides = curdesktop ? textSlidesDesktop : textSlides;
        let dots = desktop ? allDotsD : allDots;

        if (curdesktop !== desktop){
            let currentSlide = 0;
            let prevSlide = slides.length - 1;

            desktop = curdesktop;
        }
        renderSlides(numSlide, slides);
        dots[0].classList.add("active-dot");
        for (let i=1; i<dots.length; i++){
            dots[i].classList.remove("active-dot");
        }
    });    
})();