(function(){
    const deffMediaQuery = window.matchMedia("(max-width: 470px)");
    const smallMediaQuery = window.matchMedia("(min-width: 470px) and (max-width: 770px)");
    const medMediaQuery = window.matchMedia("(min-width: 770px) and (max-width: 1000px)");
    const largeMediaQuery = window.matchMedia("(min-width: 1000px)");
    const prev = document.querySelector("#prev_bt_tan");
    const next = document.querySelector("#next_bt_tan");
    const listPicture = document.querySelector(".illustration-picture");
    
   

     function changeQuantityDisplaySlidesToOne(deffMediaQuery) {
        let marginDeff = 0;
        listPicture.style.marginLeft = "0";
        if(deffMediaQuery.matches) {
            next.onclick = function(){
                if(marginDeff > -800){  
                 marginDeff -=100;
                 listPicture.style.marginLeft = marginDeff + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > marginDeff){  
                  marginDeff +=100;
                  listPicture.style.marginLeft = marginDeff + "%";
                  }
              }
         }
      }
      changeQuantityDisplaySlidesToOne(deffMediaQuery);
      deffMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToOne);

     function changeQuantityDisplaySlidesToTwo(smallMediaQuery) {
        let marginSmall = 0;
        listPicture.style.marginLeft = "0";
        if(smallMediaQuery.matches) {
            next.onclick = function(){
                if(marginSmall > -350){  
                 marginSmall -=50;
                 listPicture.style.marginLeft = marginSmall + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > marginSmall){  
                  marginSmall +=50;
                  listPicture.style.marginLeft = marginSmall + "%";
                  }
              } 
         }
      }
    
      changeQuantityDisplaySlidesToTwo(smallMediaQuery);
      smallMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToTwo);

      
     function changeQuantityDisplaySlidesToThree(medMediaQuery) {
        let marginMed = 0;
        listPicture.style.marginLeft = "0";
        if(medMediaQuery.matches) {
            next.onclick = function(){
                if(marginMed > -199){  
                 marginMed -=33.333;
                 listPicture.style.marginLeft = marginMed + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > marginMed){  
                  marginMed +=33.333;
                  listPicture.style.marginLeft = marginMed + "%";
                  }
              }
         }
      }
     
      changeQuantityDisplaySlidesToThree(medMediaQuery);
      medMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToThree);

      function changeQuantityDisplaySlidesToFive(largeMediaQuery) {
        let marginLarge = 0;
        listPicture.style.marginLeft = "0";
        if(largeMediaQuery.matches) {
            next.onclick = function(){
                if(marginLarge > -80){  
                 marginLarge -=20;
                 listPicture.style.marginLeft = marginLarge + "%";
                 }
             }
         
             prev.onclick = function(){
                 if(0 > marginLarge){  
                  marginLarge +=20;
                  listPicture.style.marginLeft = marginLarge + "%";
                  }
              }
        }
      }
     
      changeQuantityDisplaySlidesToFive(largeMediaQuery);
      largeMediaQuery.addEventListener("change", changeQuantityDisplaySlidesToFive);

})()