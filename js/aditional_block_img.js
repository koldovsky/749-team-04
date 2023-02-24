
const img = document.querySelector('#additional-container-img');


let opacity = 0.3;
let direction = 'up';

(() => { 
setInterval(function () {

    if (direction === 'up') {
        opacity += 0.01;
        if (opacity >= 1) {
            direction = 'down';
        }
    } else {
        opacity -= 0.02;
        if (opacity <= 0.2) {
            direction = 'up';
        }
    }


    img.style.opacity = opacity;
}, 60);
})();