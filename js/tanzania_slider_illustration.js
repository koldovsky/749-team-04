(function(){
    const deffMediaQuery = window.matchMedia("(min-width: 470px)");
    const smallMediaQuery = window.matchMedia("(min-width: 470px)");
    const medMediaQuery = window.matchMedia("(min-width: 770px)");
    const largeMediaQuery = window.matchMedia("(min-width: 1000px)");
    const prev = document.querySelector("#prev_bt_tan");
    const next = document.querySelector("#next_bt_tan");
    let margin = 0;
    const listPicture = document.querySelector(".illustration-picture");
    
   

     function changeQuantityDisplaySlidesToOne(deffMediaQuery) {
        if(deffMediaQuery.matches) {
            next.onclick = function(){
                if(margin > -800){  
                 margin -=100;
                 listPicture.style.marginLeft = margin + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > margin){  
                  margin +=100;
                  listPicture.style.marginLeft = margin + "%";
                  }
              }
         }
      }
      changeQuantityDisplaySlidesToOne(deffMediaQuery);
      deffMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToOne);

     function changeQuantityDisplaySlidesToTwo(smallMediaQuery) {
        if(smallMediaQuery.matches) {
            next.onclick = function(){
                if(margin > -350){  
                 margin -=50;
                 listPicture.style.marginLeft = margin + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > margin){  
                  margin +=50;
                  listPicture.style.marginLeft = margin + "%";
                  }
              } 
         }
      }
    
      changeQuantityDisplaySlidesToTwo(smallMediaQuery);
      smallMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToTwo);

      
     function changeQuantityDisplaySlidesToThree(medMediaQuery) {
        if(medMediaQuery.matches) {
            next.onclick = function(){
                if(margin > -199){  
                 margin -=33.333;
                 listPicture.style.marginLeft = margin + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > margin){  
                  margin +=33.333;
                  listPicture.style.marginLeft = margin + "%";
                  }
              }
         }
      }
     
      changeQuantityDisplaySlidesToThree(medMediaQuery);
      medMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToThree);

      function changeQuantityDisplaySlidesToFive(largeMediaQuery) {
        if(largeMediaQuery.matches) {
            next.onclick = function(){
                if(margin > -80){  
                 margin -=20;
                 listPicture.style.marginLeft = margin + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > margin){  
                  margin +=20;
                  listPicture.style.marginLeft = margin + "%";
                  }
              }
        }
      }
     
      changeQuantityDisplaySlidesToFive(largeMediaQuery);
      largeMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToFive);

})()