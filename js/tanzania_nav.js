    function drop_nav(){
        document.getElementById("nav__tanzania").style.visibility = "visible";
        document.body.style.overflow = "hidden";
    }
    
    function close_nav(){
        document.getElementById("nav__tanzania").style.visibility = "hidden";
        document.body.style.overflow = "visible";
    }

  
    document.getElementById("nav_icon_tanzania_close").onclick = function(){close_nav();}
    document.getElementById("icon_tanzania_nav").onclick = function(){drop_nav();}
