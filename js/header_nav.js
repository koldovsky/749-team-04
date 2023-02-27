(function(){

let count=0;
let countDrop=0;

function dropDownTourList(){
    if(countDrop == 0){
        document.querySelector("#tour-dropdown-menu").style.display = "block";
        document.querySelector("#tour-dropdown-menu").style.width = "fit-content";
        countDrop+=1;
    }else{
        document.querySelector("#tour-dropdown-menu").style.display= "none";
        document.querySelector("#tour-dropdown-menu").style.width = "0";
        countDrop-=1;
    }
}

document.querySelector("#tour_list_button").addEventListener("click", dropDownTourList);

function dropNav(){
    if(count == 0){
    document.querySelector("#navbarContent").classList.remove("header_nav");
    document.querySelector("#navbarContent").classList.add("nav-display");
    document.body.style.overflow = "hidden";
    count+=1;
  }else{
    document.querySelector("#navbarContent").classList.remove("nav-display");
    document.querySelector("#navbarContent").classList.add("header_nav");
    document.body.style.overflow = "visible";
    count-=1;
  }
}

document.querySelector("#toggler").addEventListener("click", dropNav);

let myMediaQueryMainNav = window.matchMedia("(min-width: 992px)");
function widthChangeMainNav(myMediaQueryMainNav) {
    if(myMediaQueryMainNav.matches) {
        document.querySelector("#navbarContent").classList.remove("nav-display");
        document.querySelector("#navbarContent").classList.add("header_nav");
        document.querySelector("#tour-dropdown-menu").style.display= "none";
        document.querySelector("#tour-dropdown-menu").style.width = "0";
        
     }
  }

 
  myMediaQueryMainNav.addEventListener("change", widthChangeMainNav);
  widthChangeMainNav(myMediaQueryMainNav);

})()