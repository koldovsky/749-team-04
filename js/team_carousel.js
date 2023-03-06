(() => {

    const socials_logos = `<div class="carousel__social-logos">
    <a href="https://www.facebook.com" class="carousel__social-logo-item"><img
            class="social-logo-img" src="img/logo-facebook.png" alt="Facebook logo"></a>
    <a href="https://www.instagram.com/" class="carousel__social-logo-item"><img
            class="social-logo-img" src="img/logo-insta.png" alt="Instagram logo"></a>
    <a href="https://www.youtube.com/" class="carousel__social-logo-item"><img
            class="social-logo-img" src="img/logo-youtube.png" alt="Youtube logo"></a>
    </div>`;

    const slides = [
        `<div class="team_item">
            <img class="team__foto" src="img/team-dan.jpg" alt="Member of team Dan Pitts">
            <div class="carousel__member-name">Dan Pitts</div>
            <p class="carousel__member_job">Professional guide | 5 years of experiance</p>
            ${socials_logos}
        </div>`,
        `<div class="team_item">
            <img class="team__foto" src="img/team-helena.jpg" alt="Member of team Helena Farse">
            <div class="carousel__member-name">Helena Farse</div>
            <p class="carousel__member_job">Professional guide | 10 years of experiance</p>
            ${socials_logos}
        </div>`,
        `<div class="team_item">
            <img class="team__foto" src="img/team-lucy.jpg" alt="Member of team Lucy Madins">
            <div class="carousel__member-name">Lucy Madins</div>
            <p class="carousel__member_job">Photographer | 5 years of experiance</p>
            ${socials_logos}
        </div>`,
        `<div class="team_item">
            <img class="team__foto" src="img/team-tomas.jpg" alt="Member of team Tomas Willens">
            <div class="carousel__member-name">Tomas Willens</div>
            <p class="carousel__member_job">Photographer | 5 years of experiance</p>
            ${socials_logos}
        </div>`
    ];


    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.team__carousel-item');
        slidesContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 768) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];
                console.log(slides.length);
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

    renderSlides(slides);

    const nextButton = document.querySelector('.team-carousel__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.team-carousel__prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    });
})();