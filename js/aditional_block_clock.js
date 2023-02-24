(() => {
    function updateClock() {
        const clockContainer = document.querySelector('.additional_clock');
        clockContainer.innerText = new Date().toLocaleTimeString('uk');
    }
    setInterval(updateClock, 1000);
})();

(() => {

    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerText = new Date().toLocaleTimeString('uk');
    }

    setInterval(updateClock, 1000);

})();