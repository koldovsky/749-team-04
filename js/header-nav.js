let count=0;
let countDrop=0;

function dropDownTourList(){
    if(countDrop == 0){
        document.getElementById("tour-dropdown-menu").style.display = "block";
        document.getElementById("tour-dropdown-menu").style.width = "fit-content";
        countDrop+=1;
    }else{
        document.getElementById("tour-dropdown-menu").style.display= "none";
        document.getElementById("tour-dropdown-menu").style.width = "0";
        countDrop-=1;
    }
}

document.getElementById("tour_list_button").onclick = function(){dropDownTourList()};

function dropNav(){
    if(count == 0){
    document.getElementById("navbarContent").classList.remove("header_nav");
    document.getElementById("navbarContent").classList.add("nav-display");
    document.body.style.overflow = "hidden";
    count+=1;
  }else{
    document.getElementById("navbarContent").classList.remove("nav-display");
    document.getElementById("navbarContent").classList.add("header_nav");
    document.body.style.overflow = "visible";
    count-=1;
  }
}

document.getElementById("toggler").onclick = function(){dropNav()};

let myMediaQueryMainNav = window.matchMedia('(min-width: 992px)');
function widthChangeMainNav(myMediaQueryMainNav) {
    if(myMediaQueryMainNav.matches) {
        document.getElementById("navbarContent").classList.remove("nav-display");
        document.getElementById("navbarContent").classList.add("header_nav");
     }
  }

 
  myMediaQueryMainNav.addEventListener("resize", widthChangeMainNav);
  widthChangeMainNav(myMediaQueryMainNav);