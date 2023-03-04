   (function(){
   
   function drop_nav(){
        document.querySelector("#nav__tanzania").style.visibility = "visible";
        document.querySelector("#tour_list_nav").style.height = "0";
        document.body.style.overflow = "hidden";

    }
    
    function close_nav(){
        document.querySelector("#nav__tanzania").style.visibility = "hidden";
        document.body.style.overflow = "visible";
    }

    function drop_tour_list_nav(){
        document.querySelector("#tour_list_nav").style.visibility = "visible";
        document.querySelector("#tour_list_nav").style.height = "auto";
    }
    
    function close_tour_list_nav(){
        document.querySelector("#tour_list_nav").style.visibility = "hidden";
    }

        document.querySelector("#tanzania_header_contacts").addEventListener("click", close_tour_list_nav);
        document.querySelector("#tour_list_bt").addEventListener("click", drop_tour_list_nav);

    document.addEventListener("click", function(e){
        if(e.target.id != "tour_list_nav" && e.target.id != "tour_list_bt"){
            close_tour_list_nav();
            document.querySelector("#tour_list_nav").style.height = "0";
        }
    })

    let MediaQueryNav = window.matchMedia('(max-width: 999px)');
    function widthChangeCallbackNav(MediaQueryNav) {
        if(MediaQueryNav.matches) {
            document.querySelector("#nav_icon_tanzania_close").addEventListener("click", close_nav);
            document.querySelector("#icon_tanzania_nav").addEventListener("click", drop_nav);
         }else{
            document.querySelector("#nav__tanzania").style.visibility = "hidden";
            document.querySelector("#tour_list_nav").style.visibility = "hidden";
            document.body.style.overflow = "visible";
         }
      }
    
      widthChangeCallbackNav(MediaQueryNav);
      MediaQueryNav.addEventListener("change", widthChangeCallbackNav);

    })()