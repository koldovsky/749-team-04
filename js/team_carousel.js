(() => {
    const slides = [
        `<img class="team__foto" src="img/team-dan.jpg" alt="Member of team Dan Pitts">
                    <div class="carousel__member-name">Dan Pitts</div>`,
        `<img class="team__foto" src="img/team-helena.jpg" alt="Member of team Helena Farse">
                    <div class="carousel__member-name">Helena Farse</div>`,
        `<img class="team__foto" src="img/team-lucy.jpg" alt="Member of team Lucy Madins">
                    <div class="carousel__member-name">Lucy Madins</div>`,
        `<img class="team__foto" src="img/team-tomas.jpg" class="d-block w-50 mx-auto" alt="Member of team Tomas Willens">
                    <div class="carousel__member-name">Tomas Willens</div>`
    ];


    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.team__carousel-item');
        slidesContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 768) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerHTML > 900) {
                const thirdSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }

    // setInterval(nextSlide, 3000);
    renderSlides(slides);

    //buttons

    const nextButton = document.querySelector('.team-carousel__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.team-carousel__prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    })

})();