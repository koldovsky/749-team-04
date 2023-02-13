    function drop_nav(){
        document.getElementById("nav__tanzania").style.visibility = "visible";
        document.getElementById("tour_list_nav").style.height = "0";
        document.body.style.overflow = "hidden";

    }
    
    function close_nav(){
        document.getElementById("nav__tanzania").style.visibility = "hidden";
        document.body.style.overflow = "visible";
    }

  
        document.getElementById("nav_icon_tanzania_close").onclick = function(){close_nav();}
        document.getElementById("icon_tanzania_nav").onclick = function(){drop_nav();}



    function drop_tour_list_nav(){
        document.getElementById("tour_list_nav").style.visibility = "visible";
        document.getElementById("tour_list_nav").style.height = "auto";
    }
    
    function close_tour_list_nav(){
        document.getElementById("tour_list_nav").style.visibility = "hidden";
    }

        document.getElementById("tanzania_header_contacts").onclick = function(){close_tour_list_nav();}
        document.getElementById("tour_list_bt").onclick = function(){drop_tour_list_nav();}

    document.addEventListener("click", function(e){
        if(e.target.id != "tour_list_nav" && e.target.id != "tour_list_bt"){
            close_tour_list_nav();
            document.getElementById("tour_list_nav").style.height = "0";
        }
    })