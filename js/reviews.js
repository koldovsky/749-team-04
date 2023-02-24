(function () {
    const imgSlides = [
        '<img class="reviews__image" src="img/photographer.jfif" alt="Photographer"></img>',
        '<img class="reviews__image" src="img/elefant.jfif" alt="Elefant"></img>',
        '<img class="reviews__image" src="img/in-car.jfif" alt="In car"></img>'
    ];

    const textSlides = [
        `<p class="reviews-text">
            I recommend a tour to Rwanda. It is perhaps better not to go to this country without a
            reliable guide. With Mango Tours, we felt completely safe, and we want to go there again, with
            the kids.
            Well thought-out stops along the way, excellent hotels. The guides are worth mentioning as a
            separate point. Thanks for the wonderful experience!
        </p>
        <h3 class="reviews__name">Desmond Tills</h3>`,
        `<p class="reviews-text">
            This is the second time I'm going on a safari with Mango Tours. To anyone who doubts, I
            REALLY recommend this active vacation! It is a completely different experience than regular
            all-inclusive or sightseeing tours. Here you see the real Africa, in all its diversity.
        </p>
        <h3 class="reviews__name">Ann and Peter Reiss</h3>`,
        `<p class="reviews-text">
            This is a reliable travel company, the manager stays in touch throughout the trip.
            Everything was perfectly planned, the trip was comfortable and left a lot of pleasant impressions.
            We're thinking about the next safari trip with Mango Travel. Seeing lions and antelopes live - it's
            worth it!
        </p>
        <h3 class="reviews__name">Cole Holmes</h3>`
    ]

    let currentSlide = 0;

    const dots = document.querySelector('.click-dots');

    for(let i=0; i<textSlides.length; i++){
        const dot = document.createElement("div");
        dot.classList.add("click-dot");
        dots.appendChild(dot);
        dot.addEventListener("click",nextSlide.bind(null,i));
    }

    const allDots = document.querySelectorAll(".click-dot");
    allDots[0].classList.add("active-dot");

    function renderSlides(textSlides){
        const slideConteiner = document.querySelector(".reviews__slide");
        slideConteiner.innerHTML = textSlides[currentSlide];
    }

    function renderDot(numSlide){
        const currDot = allDots[numSlide];
        currDot.classList.add("active-dot");
        const prevDot = allDots[currentSlide];
        prevDot.classList.remove("active-dot");
    }

    function renderImages(imgSlides){
        const imageConteiner = document.querySelector(".reviews__image-slide");
        imageConteiner.innerHTML = imgSlides[currentSlide];
    }

    function nextSlide(numSlide){
        if (numSlide !== currentSlide){  
            renderDot(numSlide);

            currentSlide = numSlide;
            renderSlides(textSlides);  
            renderImages(imgSlides);  
        } 
    }

    renderSlides(textSlides);
    renderImages(imgSlides);  
    
    window.addEventListener('resize', () => {
        renderSlides(textSlides);
    });    
})();